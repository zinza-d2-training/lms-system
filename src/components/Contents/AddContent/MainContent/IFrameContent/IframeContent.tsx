import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import { TextField } from 'mui-rff';
import React from 'react';
import '../StyleTabBasicContent.css';
interface Props {
  name: string;
}
const IframeContent = ({ name }: Props) => {
  const [select, setSelect] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
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
            <InputLabel id="demo-simple-select-label">Embedded</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={select}
              label="Embedded"
              onChange={handleChange}>
              <MenuItem value={10}>Embedded</MenuItem>
              <MenuItem value={20}>Pop-up</MenuItem>
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
          sx={{}}
          size="small"
          placeholder="Start writing for suggestions or paste a URL"
          id="filled-basic"
          name={name}
          className="input-name"
        />

        <Button
          className="input-button-load"
          sx={{ marginTop: '-14px', marginLeft: '12px' }}
          size="small"
          variant="contained">
          Embed
        </Button>
      </Box>
    </>
  );
};

export default IframeContent;
