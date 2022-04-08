import { Box, Paper } from '@mui/material';
import { useCallback, useRef, useState } from 'react';
import { useField, UseFieldConfig } from 'react-final-form';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

interface Props {
  name: string;
  initPreview?: string;
  config?: UseFieldConfig<File | undefined>;
}

export const ImageField = ({ name, initPreview, config }: Props) => {
  const {
    input: { onChange }
  } = useField(name, config);
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    inputEl.current?.click();
  };

  const [preview, setPreview] = useState<string | undefined>(initPreview);

  const handleRemove = () => {
    onChange(undefined);
    setPreview(undefined);
  };
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      try {
        if (e.target.files) {
          const file = e.target.files[0];
          onChange(file);
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onloadend = () => {
            const res = fileReader.result?.toString();
            if (res) setPreview(res);
          };
        }
      } catch (error) {
        console.error(error);
      }
    },
    [onChange]
  );
  return (
    <Box>
      {preview && (
        <Box>
          <Paper
            sx={{
              width: 250,
              height: 'auto',
              left: 0,
              right: 0,
              position: 'relative'
            }}>
            <img
              style={{
                width: '100px',
                height: 'auto',
                objectFit: 'cover',
                left: 0,
                right: 0
              }}
              src={preview}
              alt="anh"
            />
            <HighlightOffIcon
              sx={{ position: 'absolute', top: -16, right: -30 }}
              onClick={handleRemove}
              color="error"
            />
          </Paper>
        </Box>
      )}

      <button
        onClick={onButtonClick}
        style={{
          margin: '10px'
        }}>
        <AddAPhotoOutlinedIcon />
      </button>
      <input
        ref={inputEl}
        style={{
          display: 'none'
        }}
        type="file"
        name={name}
        id=""
        onChange={handleChange}
      />
    </Box>
  );
};
