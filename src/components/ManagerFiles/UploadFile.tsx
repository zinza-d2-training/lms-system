import { Box, List, ListItem } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useEffect } from 'react';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

const UploadFile = () => {
  const [selectedFiles, setSelectedFiles] = useState<File | undefined>(
    undefined
  );
  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFiles(acceptedFiles);
  }, []);

  useEffect(() => {
    if (selectedFiles) {
    }
  }, [selectedFiles]);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop
  });
  return (
    <>
      <Box
        {...getRootProps()}
        sx={{
          textAlign: 'center',
          padding: '30px',
          border: '1px dashed #959595',
          borderRadius: '5px',
          backgroundColor: '#EEEFEF',
          color: '#bdbdbd',
          cursor: 'pointer',
          marginBottom: '20px',
          '&:hover': {
            borderColor: '#0464b1',
            backgroundColor: '#e8f2f3',
            '.upload-icon': {
              color: '#0464b1'
            }
          }
        }}>
        <input {...getInputProps()} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <CloudUploadOutlinedIcon
            className="upload-icon"
            fontSize="large"
            sx={{
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              padding: '3px',
              marginRight: '10px'
            }}
          />
          <p style={{ fontSize: '16px' }}>
            {' '}
            Choose files to upload or drag-and-drop here
          </p>
        </Box>
      </Box>
      {acceptedFiles.map((file) => (
        <List>
          <ListItem disablePadding>{file.name}</ListItem>
        </List>
      ))}
    </>
  );
};

export default UploadFile;
