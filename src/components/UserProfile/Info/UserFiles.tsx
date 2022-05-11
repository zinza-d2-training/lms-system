import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link,
  TextField,
  Typography
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { CustomizedMenus } from '../../Courses/ListCourses/MenuActions';
import { useFileUser } from './hook';

export const UserFiles = () => {
  const { userId } = useParams() as { userId: string };
  //get user file
  const { filesData, loading } = useFileUser(parseInt(userId)); //example
  return (
    <Box sx={{ padding: '10px' }}>
      {loading ? (
        'loading'
      ) : (
        <TableContainer>
          <Table
            sx={{ minWidth: 650, textAlign: 'center' }}
            size="small"
            aria-label="customized table">
            <TableHead className="table-head">
              <TableRow>
                <TableCell align="left">NAME</TableCell>
                <TableCell align="left">TYPE</TableCell>
                <TableCell align="center">SIZE</TableCell>
                <TableCell align="right">UPLOADED</TableCell>
                <TableCell align="right">OPTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filesData.map((file) => (
                <TableRow
                  className="table-row-content"
                  key={file.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 }
                  }}>
                  <TableCell component="th" scope="row" align="left">
                    <Typography>{file.name}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    {file.name.slice(file.name.lastIndexOf('.') + 1)}
                  </TableCell>
                  <TableCell align="center">{file.size}</TableCell>
                  <TableCell align="right">{file.created_At}</TableCell>
                  <TableCell align="right">
                    <CustomizedMenus
                      items={[
                        {
                          to: `#`,
                          label: 'Preview',
                          icon: <RemoveRedEyeOutlinedIcon />
                        },
                        {
                          to: `#`,
                          label: 'Download',
                          icon: <FileDownloadOutlinedIcon />
                        },
                        {
                          to: `#`,
                          label: 'Edit',
                          icon: <ModeEditOutlinedIcon />
                        },
                        {
                          to: `#`,
                          label: 'Delete',
                          icon: <ClearOutlinedIcon />
                        }
                      ]}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Box
        className="box-container-footer"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '16px'
        }}>
        <Box>
          <button>1 to 8 of 8</button>
        </Box>

        <Box className="box-container-footer-right">
          <SaveAltIcon />
          <FilterAltIcon />
          <TextField className="button-search" placeholder="Search" />
        </Box>
      </Box>
    </Box>
  );
};
