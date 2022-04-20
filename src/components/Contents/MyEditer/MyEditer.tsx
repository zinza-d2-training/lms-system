import { Box, Button, MenuItem, Select } from '@mui/material';
import { useCallback } from 'react';
import { Form } from 'react-final-form';
import { EditorField } from './EditorField';
import './style.css';
import { FormValues } from './types';

export default function MyEditer() {
  const handleSubmit = useCallback((value: FormValues) => {
    console.log(value);
  }, []);
  return (
    <div className="App">
      <Form<FormValues>
        initialValues={{
          content: ''
        }}
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box py={2}>
              <Box height={360}>
                <EditorField name="content" />
              </Box>
              <Box>
                <Button variant="contained" color="primary" type="submit">
                  Save and View
                </Button>              
              </Box>
            </Box>
          </form>
        )}
      />
    </div>
  );
}
