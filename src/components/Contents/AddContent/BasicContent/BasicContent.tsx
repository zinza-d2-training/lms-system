import { Box } from '@mui/material';
import React from 'react'
import TabBasicContent from './TabBasicContent/TabBasicContent';
import './TabBasicContent/StyleTabBasicContent.css'
const BasicContent = () => {
  return (
    <>
      <Box className="Basic-content-header">
        <label htmlFor="">Unit Form</label>
        <input placeholder="Unit name" />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <TabBasicContent />
      </Box>
    </>
  );
}

export default BasicContent
