import { Box, Button, Checkbox, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';
import '../Content/StyleSurvay.css'
export const Survey = () => {

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: ' 16px'
        }}>
        <Box
          sx={{
            flexBasis: '75%',
            borderRight: '1px solid #ccc'
          }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginRight: '14px'
            }}>
            <input placeholder="survey_1650280792 " className="input-survey" />

            <button className="button-survey">
              Show questions from all courses
            </button>
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
                  <Checkbox size="small" />
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
            <select name="cars" id="cars" className="Select-option">
              <option value="volvo">Save and view</option>
              <option value="saab">and back to units list</option>
            </select>
            <span>&nbsp;or cancel</span>
          </Box>
        </Box>

        <Box
          sx={{
            flexBasis: '25%'
          }}></Box>
      </Container>
    </>
  );
};
