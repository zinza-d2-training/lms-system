import { Box, Button, Link, Typography } from '@mui/material';
import React from 'react';
import * as Yup from 'yup';
import { makeValidate, TextField } from 'mui-rff';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useContentInfo } from './hook';
import { Form } from 'react-final-form';

interface ContentForm {
  name: string;
  completedMethod: number;
  link?: string;
  type: number;
  contents?: string;
}

const schema: Yup.SchemaOf<ContentForm> = Yup.object().shape({
  name: Yup.string().max(80).required(),
  completedMethod: Yup.number().required(),
  type: Yup.number().required(),
  link: Yup.string(),
  contents: Yup.string()
});

const validate = makeValidate(schema);

const Contents = () => {
  const { contentId } = useParams() as { contentId: string };
  const { contentInfo: initialValues } = useContentInfo(parseInt(contentId));

  const handleSubmit = () => {};
  return (
    <>
      <Box component="form">
        <Form<ContentForm>
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validate={validate}
          render={({ handleSubmit, invalid, submitting }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex' }}>
                  <Typography>Unit name</Typography>
                  <TextField
                    required
                    name="name"
                    type="text"
                    id="name"
                    size="small"
                    placeholder="name..."
                  />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center'
                  }}>
                  <Button
                    disabled={invalid || submitting}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      height: '38px',
                      backgroundColor: '#000FE6',
                      width: '15%',
                      marginLeft: '210px'
                    }}>
                    {contentId ? 'Update' : 'Save'}
                  </Button>
                  <Link
                    component={RouterLink}
                    underline="hover"
                    to="/courses"
                    sx={{
                      marginLeft: '15px'
                    }}>
                    <Typography>Cancel</Typography>
                  </Link>
                </Box>
              </form>
            );
          }}
        />
      </Box>
    </>
  );
};

export default Contents;
