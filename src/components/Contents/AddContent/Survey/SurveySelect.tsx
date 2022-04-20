import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import {
  Box,
  Button
} from '@mui/material';
import React from 'react';
import './StyleSurvey.css';

const Survey = () => {

  return (
    <>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginRight: '14px'
          }}>
          <input placeholder="Name Survey " className="input-survey" />
        </Box>

        <Box
          className="box-container-table"
          sx={{
            marginTop: '16px',
            marginRight: '14px'
          }}>
          <table id="container-table">
            <tr>
              <th className="col-table-1">USER</th>
              <th className="col-table-2">TYPE</th>
              <th className="col-table-3">QUESTION</th>
              <th className="col-table-4">OPTION</th>
            </tr>
            <tr>
              <td>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: '#003de6'
                  }}>
                  add
                </Button>
              </td>
              <td>
                icon
              </td>
              <td>How would you rate this course?</td>
              <td>
                <MoreHorizIcon sx={{ marginLeft: '22px' }} />
              </td>
            </tr>
          </table>
          <Box
            className="box-container-footer"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '16px'
            }}>
            <Box>
              <button>1 to 1 of 1</button>
            </Box>

            <Box className="box-container-footer-right">
              <SaveAltIcon />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 2,
            mb: 2
          }}>
          <span>&nbsp;or cancel</span>
        </Box>
      </Box>
    </>
  )
}

export default Survey
