import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeValidate, TextField } from 'mui-rff';
import * as React from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Content, ContentInfo, ContentType } from '../../../../types/contents';
import { EditorField } from '../../Editer/EditorField';
import { DropDown } from './DropDown';
import './StyleTabBasicContent.css';

const RenderBasicContent = () => {
  const { id } = useParams() as { id: string };
  const schema: Yup.SchemaOf<
    Pick<
      Content,
      | 'name'
      | 'completedMethod'
      | 'content'
      | 'completedQuestionId'
      | 'periodTime'
    >
  > = Yup.object().shape({
    name: Yup.string().max(80).required(),
    completedMethod: Yup.mixed().oneOf([1, 2, 3]),
    content: Yup.string(),
    completedQuestionId: Yup.number(),
    periodTime: Yup.number()
  });
  const validate = makeValidate(schema);

  const handleSubmit = async () => {};

  return (
    <>
      <Box className="Basic-content-header">
        <Typography>Unit Form</Typography>
        <TextField
          placeholder="Unit name"
          id="filled-basic"
          label="Filled"
          variant="filled"
          name="name"
        />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{
              borderTop: '1px solid #eeeeee',
              borderBottom: '1px solid #ffffff',
              mt: 2,
              alignItems: 'center',
              paddingTop: '14px'
            }}>
            <Typography
              sx={{
                marginLeft: '32px',
                fontSize: '14px'
              }}>
              How to complete it
            </Typography>
            <Box
              sx={{
                marginLeft: '188px',
                marginTop: '-35px'
              }}
              className="container-tab"
              aria-label="basic tabs example">
              <Button>With a checkbox</Button>
              <Button>With a question</Button>
              <Button>After a period of time</Button>
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: 'flex' }}>
              <Typography className="question-select">
                Select a question
              </Typography>
              <DropDown />
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: 'flex' }}>
              <Typography className="label-after-of-time font-size-14">
                Time limit
              </Typography>
              <input placeholder="Seconds" className="input-after-of-time" />
            </Box>
          </Box>

          {/* <Box><EditorField/></Box> */}
          <Form<ContentInfo>
            validate={validate}
            initialValues={{}}
            onSubmit={handleSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Box py={2}>
                  <Box height={200}>
                    <EditorField name="content" />
                  </Box>
                  <Box>
                    <Button variant="contained" color="primary" type="submit">
                      Save
                    </Button>
                  </Box>
                </Box>
              </form>
            )}
          />
        </Box>
      </Box>
    </>
  );
};

export default RenderBasicContent;
