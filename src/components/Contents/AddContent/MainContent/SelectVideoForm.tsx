import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { Autocomplete, TextField } from 'mui-rff';
import React, { useCallback, useEffect, useState } from 'react';
import { useField, UseFieldConfig } from 'react-final-form';
import 'react-quill/dist/quill.snow.css';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { files } from '../../../../fakeData/files';

interface Props {
  name: string;
  fileIdField: string;
  linkField: string;
  config?: UseFieldConfig<string>;
  label?: string;
}

enum UseVideoBy {
  Link = 1,
  File = 2
}

export const SelectVideoForm = ({
  name,
  fileIdField,
  linkField,
  config,
  label
}: Props) => {
  const [file, setFile] = useState<File>();

  const {
    input: { value, onChange }
  } = useField(name, config);

  const changeValue = (value: UseVideoBy) => {
    onChange(value);
  };

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
    <Box
      sx={{
        borderTop: '1px solid #eeeeee',
        borderBottom: '1px solid #ffffff',
        mt: 1,
        alignItems: 'center',
        paddingTop: '14px'
      }}
      className="container-option-complete">
      <Typography
        sx={{
          marginLeft: '32px',
          fontSize: '14px'
        }}>
        {label}
      </Typography>
      <Box
        sx={{
          marginLeft: '188px',
          marginTop: '-28px'
        }}
        className="container-button"
        aria-label="basic tabs example">
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            disabled={value === UseVideoBy.Link}
            onClick={() => changeValue(UseVideoBy.Link)}>
            Use a Youtube
          </Button>
          <Button
            disabled={value === UseVideoBy.File}
            onClick={() => changeValue(UseVideoBy.File)}>
            Use a File
          </Button>
        </ButtonGroup>
      </Box>
      {value === UseVideoBy.File && (
        <Box className="container-question-select" sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', marginLeft: '42px' }}>
            <Typography
              className="question-select"
              sx={{
                fontSize: '14px',
                marginRight: '20px  '
              }}>
              Select a file
            </Typography>
            <Box>
              <Autocomplete<number, false, true, false>
                label="Select a file"
                name={fileIdField}
                options={allFiles.map((item) => item.id)}
                disableClearable
                getOptionLabel={(option) =>
                  allFiles.find((item) => item.id === option)?.name || ''
                }
                size="small"
                sx={{ width: '300px' }}
              />
            </Box>
            <Box>
              <Button
                size="small"
                component="label"
                sx={{
                  marginLeft: '10px',
                  border: 'unset',
                  borderRadius: '50%'
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

                <input
                  type="file"
                  hidden
                  accept="video/*"
                  onChange={handleChange}
                />
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      {value === UseVideoBy.Link && (
        <Box>
          <Box sx={{ display: 'flex', marginLeft: '87px' }}>
            <Typography className="label-after-of-time font-size-14">
              Input a link
            </Typography>
            <Box
              sx={{
                mt: '12px',
                marginLeft: '10px'
              }}>
              <TextField
                size="small"
                fullWidth
                type="url"
                placeholder="Search on YouTube and select the video you want, or paste a URL here"
                id="filled-basic"
                name={linkField}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
