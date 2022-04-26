import { Box } from '@mui/material';
import { useField, UseFieldConfig } from 'react-final-form';
import ReactQuill from 'react-quill';

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
        style={{ height: '300px' }}
      />
      {submitFailed && error?.length && error[0]}
    </Box>
  );
};
