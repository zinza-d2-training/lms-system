import { Box, Button, Link, Typography } from '@mui/material';
import React from 'react';
import { useNavigate, useParams, Link as RouterLink } from 'react-router-dom';
import { useContentData } from '../../Courses/hook';

const NavigateContents = () => {
  const { id } = useParams() as { id: string };
  const { contentData } = useContentData(Number(id));
  const navigate = useNavigate();
  if (id && contentData.length) {
    navigate(`/view/${id}/content/${contentData[0]?.id}`);
  }
  return (
    <Box sx={{ padding: '10px' }}>
      <Typography sx={{ marginBottom: '10px' }}>Have no content</Typography>
      <Box>
        <Button variant="contained" sx={{ marginRight: '20px' }}>
          <Link
            component={RouterLink}
            to={'/'}
            underline="none"
            color="inherit">
            Back to course
          </Link>
        </Button>
        <Button variant="contained">
          <Link
            component={RouterLink}
            to={'#'}
            underline="none"
            color="inherit">
            View as Instructor
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default NavigateContents;
