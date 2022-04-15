import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Box, Button } from '@mui/material';
import React from 'react';
import './StyleTabEnrollUser.css';
export const TabEnrollUser = () => {
  return (
    <>
      <table id="customers" className="customers">
        <tr>
          <th className="th-colName th-colName-enroll">NAME</th>
          <th>ENROLLED ON</th>
          <th className="th-option-enroll">OPTIONS</th>
        </tr>
        <tr>
          <td>
            N. Huy Hoàng
            <Button variant="contained" disabled className="button-name">
              INTRUCTOR
            </Button>
          </td>
          <td className="td-date">31/03/2022</td>

          <td className="td-option td-option-enroll">
            <MoreHorizIcon />
          </td>
        </tr>
      </table>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '24px'
        }}>
        <Box>
          <button disabled className="show-progress">
            1 to 1 of 1
          </button>
        </Box>

        <Box>
          <SaveAltIcon />
          <FilterAltIcon />
        </Box>
      </Box>
    </>
  );
};
