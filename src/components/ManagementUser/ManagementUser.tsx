// <ColorTabs />
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import GridOnIcon from '@mui/icons-material/GridOn';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Container } from '@mui/material';
import '../Courses/Courses.css';
import LabTabs from './TabManagementUser/TabManagementUser';
export const ManagementUser = () => {
  return (
    <>
      <Container className="main-container">
        <Box className="box-content-container" sx={{ minHeight: '500px' }}>
          <Box className="box-content-left">
            <Box className="box-content-left-container">
              <LabTabs />
            </Box>
          </Box>

          <Box className="box-content-right">
            <Box className="box-content-right-container">
              <Box className="box-content-right-container-item">
                <Box className="item-left">
                  <GridOnIcon className="right-menu-icon" fontSize="large" />
                </Box>
                <Box className="item-right">
                  <h5>CONTENT</h5>
                  <p>11 units · 0 inactive</p>
                </Box>
              </Box>

              <Box className="box-content-right-container-item">
                <Box className="item-left">
                  <PersonIcon className="right-menu-icon" fontSize="large" />
                </Box>
                <Box className="item-right">
                  <h5>USERS & PROGRESS</h5>
                  <p>1 instructor · 0 learners</p>
                </Box>
              </Box>

              <Box className="box-content-right-container-item">
                <Box className="item-left">
                  <FolderCopyIcon
                    className="right-menu-icon"
                    fontSize="large"
                  />
                </Box>
                <Box className="item-right">
                  <h5>FILES</h5>
                  <p>0 files</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
