import { Box } from '@mui/material';
import { useField, UseFieldConfig } from 'react-final-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './style.css'

interface Props {
  name: string;
  config?: UseFieldConfig<string>;
}

export const EditorField = ({ name, config }: Props) => {
  const {
    input: { value, onChange }
  } = useField(name, config);

  return (
    <Box>
      <ReactQuill theme="snow" value={value} onChange={onChange} className = 'component-quill'/>
    </Box>
  );
};
