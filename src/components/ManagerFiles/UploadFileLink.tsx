import { Box, Button } from '@mui/material';
import React from 'react';
import * as Yup from 'yup';
import { makeValidate, TextField } from 'mui-rff';
import { Form } from 'react-final-form';

interface UrlForm {
  url?: string | null;
}

const schema: Yup.SchemaOf<UrlForm> = Yup.object().shape({
  url: Yup.string().url().required()
});

const validate = makeValidate(schema);
const UploadFileLink = () => {
  const handleSubmit = (url: UrlForm) => {
    console.log('123', url.url);
  };

  return (
    <>
      <Box component="form">
        <Form<UrlForm>
          onSubmit={handleSubmit}
          validate={validate}
          render={({ handleSubmit, invalid, submitting }) => {
            return (
              <form onSubmit={handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  type="url"
                  size="small"
                  id="url"
                  name="url"
                  placeholder="https://..."
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '70%',
                    marginRight: '10px'
                  }}
                />
                <Button
                  disabled={invalid || submitting}
                  type="submit"
                  variant="contained"
                  sx={{ marginTop: '15px' }}>
                  Upload
                </Button>
              </form>
            );
          }}
        />
      </Box>
    </>
  );
};

export default UploadFileLink;
