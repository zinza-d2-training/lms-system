import { Box, Button, Container, TextField } from '@mui/material';
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
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
              justifyContent: 'space-between'
            }}>
            <input placeholder="Survey name" />

            <button>Show questions from all courses</button>
          </Box>

          <Box
            sx={{
              marginTop: '16px'
            }}>
            <table id="customers">
              <tr>
                <th className="col-table-1">USER</th>
                <th className="col-table-2">TYPE</th>
                <th className="col-table-3">QUESTION</th>
                <th className="col-table-4">OPTION</th>
              </tr>
              <tr>
                <td>
                  <button>Add</button>
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>How would you rate this course?</td>
                <td>icon</td>
              </tr>

              {/* <tr>
                <td>Paris spécialités</td>
                <td>Marie Bertrand</td>
                <td>France</td>
                <td>France</td>
              </tr> */}
            </table>
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
