import { Box, FormControl, MenuItem, Typography } from '@mui/material';
import { Select, TextField } from 'mui-rff';
import React, { useState } from 'react';
import { ShowAs } from '../../../../../types/contents';
import '../StyleTabBasicContent.css';
import './StyleIframeContent.css';
interface Props {
  name: string;
  showAsName: string;
  popUpWidth: string;
  popUpHeight: string;
}
const IframeContent = ({
  name,
  showAsName,
  popUpWidth,
  popUpHeight
}: Props) => {
  const [show, setShow] = useState(true);
  const handleClickEmbed = () => {
    setShow(true);
  };

  const handleCloseEmbed = () => {
    setShow(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex', mt: 1 }}>
        <Typography
          sx={{
            fontSize: '15px',
            marginLeft: '100px',
            marginRight: '32px',
            marginTop: '8px'
          }}>
          Show as
        </Typography>
        <Box sx={{ minWidth: 240 }}>
          <FormControl fullWidth size="small">
            <Select size="small" name={showAsName}>
              <MenuItem value={ShowAs.Embedded} onClick={handleClickEmbed}>
                Embedded
              </MenuItem>
              <MenuItem value={ShowAs.PopUp} onClick={handleCloseEmbed}>
                Pop-up
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          mt: 4
        }}>
        <Typography
          sx={{
            fontSize: ' 14px',
            marginTop: '-12px',
            marginLeft: '42px',
            paddingRight: ' 12px'
          }}>
          Web address (URL)
        </Typography>

        <TextField
          size="small"
          placeholder="Start writing for suggestions or paste a URL"
          id="filled-basic"
          name={name}
          className="input-name"
        />
      </Box>

      {show && (
        <Box sx={{ display: 'flex', mt: 6 }}>
          <Typography
            sx={{
              fontSize: ' 14px',
              marginTop: '-12px',
              marginLeft: '132px',
              paddingRight: ' 12px'
            }}>
            Size
          </Typography>

          <TextField
            sx={{ fontSize: '12px' }}
            size="small"
            placeholder="pixels"
            id="filled-basic"
            name={popUpWidth}
            label="Width"
            type="number"
            className="input-name iframe-input-size"
          />

          <TextField
            size="small"
            placeholder="pixels"
            id="filled-basic"
            name={popUpHeight}
            label="Height"
            type="number"
            className="input-name iframe-input-size"
          />
        </Box>
      )}
    </>
  );
};

export default IframeContent;
