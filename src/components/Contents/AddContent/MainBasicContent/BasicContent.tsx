import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeValidate, TextField } from 'mui-rff';
import * as React from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { CompletedMethod, Content } from '../../../../types/contents';
import { EditorField } from '../../Editer/EditorField';
import AudioContent from '../AudioContent';
import IframeContent from '../IframeContent';
import VideoContent from '../VideoContent';
import WebContent from '../WebContent';
import { CompletedMethodFinalFormInput } from './CompletedMethodFinalFormInput';
import './StyleTabBasicContent.css';

type BasicContentForm = Pick<
  Content,
  'name' | 'completedMethod' | 'content' | 'completedQuestionId' | 'periodTime'
>;

const RenderBasicContent = () => {
  const { id, type } = useParams() as { id: string; type: string };
  const schema: Yup.SchemaOf<BasicContentForm> = Yup.object().shape({
    name: Yup.string().max(80).required('Error : Name is a required field'),
    completedMethod: Yup.mixed().oneOf([1, 2, 3]),
    content: Yup.string().required('Error : Content is a required field'),
    completedQuestionId: Yup.number(),
    periodTime: Yup.number()
  });
  const validate = makeValidate(schema);

  const handleSubmit = async (value: BasicContentForm) => {
    console.log(value);
  };

  return (
    <Form<BasicContentForm>
      validate={validate}
      initialValues={{
        completedMethod: CompletedMethod.WithCheckBox
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
                      case 'video':
                        return <VideoContent />;

                      case 'web':
                        return <WebContent />;

                      case 'audio':
                        return <AudioContent />;

                      case 'iframe':
                        return <IframeContent />;

                      default:
                        return <EditorField name="content" />;
                    }
                  })()}
                  <Box></Box>
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

export default RenderBasicContent;
