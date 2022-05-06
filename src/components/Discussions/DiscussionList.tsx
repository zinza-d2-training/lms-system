import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';
import { CustomizedMenus } from '../Courses/ListCourses/MenuActions';
import { useDiscussions } from './hook';
import './style.css';
import DiscussionForm from './DiscussionForm';

const DiscussionList = () => {
  const { discussions } = useDiscussions();
  const [openPopup, setOpenPopup] = useState(false);
  const [discussionId, setDiscussionId] = useState<number>();
  const handleOnclick = (id: number) => {
    setOpenPopup(true);
    setDiscussionId(id);
  };
  return (
    <>
      <Box sx={{ margin: '8px', padding: '8px' }}>
        <Box sx={{ marginBottom: '16px' }}>
          <Button
            size="small"
            variant="contained"
            onClick={() => setOpenPopup(true)}>
            New topic
          </Button>
        </Box>
        <Box>
          {discussions &&
            discussions.map((item) => (
              <Box className="discussion-item" key={item.id}>
                <Box className="discussion-item-image">
                  <img
                    src="https://secure.gravatar.com/avatar/5159d38d3580b9c31dc32f971c079d08?size=80&amp;rating=g&amp;d=https%3A%2F%2Fdinhlinh.talentlms.com%2Fpages%2Fimages%2Fdefault_user2x.png"
                    alt={''}
                    loading="lazy"
                    className="item-image"
                  />
                </Box>
                <Box className="discussion-item-content">
                  <Box className="discussion-item-content_left">
                    <Link
                      component={RouterLink}
                      to={`/discussion/${item.id}`}
                      underline="hover"
                      color="inherit">
                      <Typography>{item.topic}</Typography>
                    </Link>
                  </Box>
                  <Box className="discussion-item-content_right">
                    <CustomizedMenus
                      items={[
                        {
                          to: `#`,
                          label: 'Edit',
                          icon: <ModeEditOutlinedIcon />,
                          onClick: () => handleOnclick(item.id)
                        },
                        {
                          to: `#`,
                          label: 'Delete',
                          icon: <ClearOutlinedIcon />
                        }
                      ]}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
        </Box>
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
      {openPopup && (
        <DiscussionForm
          id={discussionId}
          label={'Edit discussion'}
          handleClose={() => setOpenPopup(false)}
        />
      )}
    </>
  );
};

export default DiscussionList;
