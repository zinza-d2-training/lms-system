import { Box, Typography } from '@mui/material';
import { useField, UseFieldConfig } from 'react-final-form';
import ReactQuill from 'react-quill';
import React from 'react';
import 'react-quill/dist/quill.snow.css';
import './style.css';

interface Props {
  name: string;
  config?: UseFieldConfig<string>;
}

export const EditorField = ({ name, config }: Props) => {
  const {
    input: { value, onChange },
    meta: { submitFailed, error }
  } = useField(name, config);

  return (
    <Box>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        className="component-quill"
      />
      <Box sx={{ marginLeft: '18px', mt: 1 }}>
        <Typography variant="body2" color="#d32f2f">
          {submitFailed && error?.length && error[0]}
        </Typography>
      </Box>
    </Box>
  );
};
