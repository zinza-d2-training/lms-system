import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { Box, Button, Typography } from '@mui/material';
import { Autocomplete } from 'mui-rff';
import React, { useCallback, useEffect, useState } from 'react';
import { files } from '../../../../../fakeData/files';

interface Props {
  name: string;
}

const AudioContent = ({ name }: Props) => {
  const [file, setFile] = useState<File>();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList) return;
    setFile(fileList[0]);
  }, []);

  //@api upload file
  useEffect(() => {
    if (file) {
    }
  }, [file]);
  const getFiles = React.useCallback(() => files, []);
  const allFiles = React.useMemo(() => {
    return getFiles();
  }, [getFiles]);
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography sx={{ mt: 1, marginLeft: 3, marginRight: '30px' }}>
        Select an audio file
      </Typography>
      <Box>
        <Autocomplete<number, false, true, false>
          label="Select a question"
          name={name}
          options={allFiles.map((item) => item.id)}
          disableClearable
          getOptionLabel={(option) =>
            allFiles.find((item) => item.id === option)?.name || ''
          }
          size="small"
          sx={{ width: '300px' }}
        />
      </Box>
      <Button
        size="small"
        component="label"
        sx={{
          marginLeft: '10px',
          border: 'unset'
        }}>
        <CloudUploadOutlinedIcon
          className="upload-icon"
          fontSize="large"
          sx={{
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            padding: '3px'
          }}
        />
        <Box>
          <input type="file" hidden accept="audio/*" onChange={handleChange} />
          Upload an audio file
        </Box>
      </Button>
      <Typography sx={{ color: 'red', mt: '10px', marginLeft: '16px' }}>
        {file?.name}
      </Typography>
    </Box>
  );
};

export default AudioContent;
