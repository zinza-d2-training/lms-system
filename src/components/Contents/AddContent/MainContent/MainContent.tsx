import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeValidate, TextField } from 'mui-rff';
import * as React from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import {
  CompletedMethod,
  Content,
  ContentType,
  ShowAs,
  VideoType
} from '../../../../types/contents';
import { EditorField } from '../../Editor/EditorField';
import AudioContent from './AudioContent/AudioContent';
import { CompletedMethodFinalFormInput } from './CompletedMethodFinalFormInput';
import IframeContent from './IFrameContent/IframeContent';
import { useContentInfo } from '../../hook';
import './StyleTabBasicContent.css';
import { VideoContent } from './VideoContent';

type BasicContentForm = Partial<
  Pick<
    Content,
    | 'name'
    | 'completedMethod'
    | 'content'
    | 'completedQuestionId'
    | 'periodTime'
    | 'link'
    | 'showAs'
    | 'videoType'
    | 'fileId'
    | 'popUpWidth'
    | 'popUpHeight'
    | 'fileId'
  >
>;

const MainContent = () => {
  const { type, contentId } = useParams() as {
    type: string;
    contentId: string;
  };

  const { contentInfo } = useContentInfo(parseInt(contentId));

  const initialValues = React.useMemo<BasicContentForm>(() => {
    return {
      name: contentInfo?.name || '',
      completedMethod:
        contentInfo?.completedMethod || CompletedMethod.WithCheckBox,
      content: contentInfo?.content || '',
      showAs: contentInfo?.showAs || ShowAs.Embedded,
      completedQuestionId: contentInfo?.completedQuestionId || undefined,
      periodTime: contentInfo?.periodTime || 0,
      videoType: contentInfo?.videoType || VideoType.Link,
      link: contentInfo?.link || '',
      fileId: contentInfo?.fileId || undefined
    };
  }, [
    contentInfo?.completedMethod,
    contentInfo?.completedQuestionId,
    contentInfo?.content,
    contentInfo?.fileId,
    contentInfo?.link,
    contentInfo?.name,
    contentInfo?.periodTime,
    contentInfo?.showAs,
    contentInfo?.videoType
  ]);

  const validateObject: any = {
    name: Yup.string().max(80).required('Error : Name is a required field'),
    completedMethod: Yup.mixed().oneOf([
      CompletedMethod.WithCheckBox,
      CompletedMethod.WithQuestion,
      CompletedMethod.AfterPeriodTime
    ]),
    showAs: Yup.number(),
    content: Yup.string().required('Error : Content is a required field'),
    completedQuestionId: Yup.number(),
    periodTime: Yup.number(),
    link: Yup.string(),
    videoType: Yup.number(),
    fileId: Yup.number(),
    popUpWidth: Yup.number(),
    popUpHeight: Yup.number()
  };

  validateObject.completedQuestionId = Yup.string().when('completedMethod', {
    is: CompletedMethod.WithQuestion,
    then: (schema) => schema.required(),
    otherwise: (schema) => schema.nullable()
  });

  validateObject.periodTime = Yup.string().when('completedMethod', {
    is: CompletedMethod.AfterPeriodTime,
    then: (schema) => schema.required(),
    otherwise: (schema) => schema.nullable()
  });

  if (type === ContentType.Iframe.toString()) {
    validateObject.link = Yup.string().url().required();
    validateObject.content = Yup.string();
    validateObject.showAs = Yup.mixed().oneOf([ShowAs.Embedded, ShowAs.PopUp]);
  }

  if (type === ContentType.Audio.toString()) {
    validateObject.content = Yup.string();
    validateObject.fileId = Yup.number().required();
  }
  if (type === ContentType.Video.toString()) {
    validateObject.content = Yup.string();
    validateObject.videoType = Yup.mixed().oneOf([
      VideoType.File,
      VideoType.Link
    ]);
    validateObject.link = Yup.string()
      .url()
      .when('videoType', {
        is: VideoType.Link, // alternatively: (val) => val == true
        then: (schema) => schema.required(),
        otherwise: (schema) => schema.nullable()
      });
    validateObject.fileId = Yup.number().when('videoType', {
      is: VideoType.File, // alternatively: (val) => val == true
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.nullable()
    });
  }

  const schema: Yup.SchemaOf<BasicContentForm> =
    Yup.object().shape(validateObject);
  const validate = makeValidate(schema);

  const handleSubmit = async (value: BasicContentForm) => {
    // console.log(value);
  };
  return (
    <Form<BasicContentForm>
      validate={validate}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      render={({ handleSubmit, errors }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Box
              className="container-input-unit-form font-size-14"
              sx={{
                display: 'flex',
                fontSize: '13px',
                pt: '24px',
                pb: '18px'
              }}>
              <Typography
                sx={{
                  marginLeft: '110px',
                  marginTop: '-13px',
                  fontSize: '14px'
                }}>
                Unit Form
              </Typography>
              <TextField
                size="small"
                placeholder="Unit name"
                id="filled-basic"
                name="name"
                className="input-name"
              />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ width: '100%' }}>
                <CompletedMethodFinalFormInput
                  name="completedMethod"
                  questionIdField="completedQuestionId"
                  periodTimeField="periodTime"
                  label="How to complete it"
                />
                <Box py={2}>
                  {(() => {
                    switch (type) {
                      case ContentType.Iframe.toString():
                        return (
                          <IframeContent
                            name="link"
                            showAsName="showAs"
                            popUpWidth="popUpWidth"
                            popUpHeight="popUpHeight"
                          />
                        );
                      case ContentType.Audio.toString():
                        return <AudioContent name="fileId" />;
                      case ContentType.Video.toString():
                        return (
                          <VideoContent
                            name="videoType"
                            fileIdField="fileId"
                            linkField="link"
                            label="Select a video"
                          />
                        );
                      default:
                        return <EditorField name="content" />;
                    }
                  })()}

                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      sx={{ marginTop: '18px', marginLeft: '18px' }}>
                      Save
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </form>
        );
      }}
    />
  );
};
export default MainContent;
