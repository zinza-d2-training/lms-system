import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Box, Button, Link, MenuItem } from '@mui/material';
import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CachedIcon from '@mui/icons-material/Cached';
import { Link as RouterLink } from 'react-router-dom';
import { CustomizedMenus } from '../../Courses/ListCourses/CourseMenuActions';
import './StyleTabCoursesUser.css';  

export const TabCoursesUser = () => {
  const handleDelete = () => {

  };
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
            <CustomizedMenus>
              <Link
                component={RouterLink}
                to={`/courses/`}
                underline="hover"
                color="inherit"
                className="option-link">
                <MenuItem disableRipple>
                  <CachedIcon />
                  Synchronize
                </MenuItem>
              </Link>

              <Link
                component={RouterLink}
                to={'#'}
                underline="hover"
                color="inherit"
                onClick={handleDelete}
                className="option-link">
                <MenuItem disableRipple>
                  <ReplayIcon />
                  Reset
                </MenuItem>
              </Link>
            </CustomizedMenus>
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
