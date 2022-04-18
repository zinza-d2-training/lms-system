import CachedIcon from '@mui/icons-material/Cached';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ReplayIcon from '@mui/icons-material/Replay';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Box, Button } from '@mui/material';
import React from 'react';
import { CustomizedMenus } from '../../Courses/ListCourses/MenuActions';
import './StyleTabCoursesUser.css';

export const TabCoursesUser = () => {
  const handleDelete = () => {};
  return (
    <>
      <table id="customers" className="customers">
        <tr>
          <th className="th-colName">NAME</th>
          <th>ENROLLED ON</th>
          <th>PROGRESS</th>
          <th>COMPLETED ON</th>
          <th className="th-option">OPTIONS</th>
        </tr>
        <tr>
          <td>
            N. Huy Hoàng
            <Button variant="contained" disabled className="button-name">
              INTRUCTOR
            </Button>
          </td>
          <td className="td-date">31/03/2022</td>
          <td className="td-prencent">75%</td>
          <td className="td-battery">
            <div className="chart-layout__item">75%</div>
          </td>
          <td className="td-option">
            <CustomizedMenus
              items={[
                {
                  to: `/courses/`,
                  label: 'Synchronize',
                  icon: <CachedIcon />
                },
                {
                  to: `#`,
                  label: 'Reset',
                  icon: <ReplayIcon />,
                  onClick: handleDelete
                }
              ]}
            />
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
