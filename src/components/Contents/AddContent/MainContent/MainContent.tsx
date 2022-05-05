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
  ShowAs
} from '../../../../types/contents';
import { EditorField } from '../../Editor/EditorField';
import AudioContent from './AudioContent/AudioContent';
import { CompletedMethodFinalFormInput } from './CompletedMethodFinalFormInput';
import IframeContent from './IFrameContent/IframeContent';
import './StyleTabBasicContent.css';

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
    | 'popUpWidth'
    | 'popUpHeight'
  >
>;

const MainContent = () => {
  const { type } = useParams() as { type: string };

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

  const schema: Yup.SchemaOf<BasicContentForm> =
    Yup.object().shape(validateObject);
  const validate = makeValidate(schema);

  const handleSubmit = async (value: BasicContentForm) => {
    console.log(value);
  };
  return (
    <Form<BasicContentForm>
      validate={validate}
      initialValues={{
        completedMethod: CompletedMethod.WithCheckBox,
        showAs: ShowAs.Embedded
      }}
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
                        return <AudioContent />;

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
