import { useContentInfo } from '../hook';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { ContentType } from '../../../types/contents';
import { BasicContent } from './BasicContent';
import { Box, Button, Container, Link, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useCourseData } from '../../Courses/hook';
const container = {
  width: '70%',
  margin: '50px auto'
};
// import { BasicContent } from './BasicContent';
const ViewContents = () => {
  const { id, contentId } = useParams() as { id: string; contentId: string };
  const { courseInfo } = useCourseData(parseInt(id));
  const { contentInfo } = useContentInfo(parseInt(contentId));
  // const rawHTML = contentInfo?.content || '';
  console.log(contentInfo);

  return (
    <>
      <Box sx={{ backgroundColor: '#f3f3f3', height: '54px' }}>
        <Link
          component={RouterLink}
          to={`/courses/${id}`}
          underline="hover"
          color="inherit"
          sx={{ display: 'flex' }}>
          <ArrowBackIosIcon sx={{ mt: 2, marginLeft: 2 }} />
          <Typography sx={{ pt: 2 }}>{courseInfo?.title}</Typography>
        </Link>
      </Box>
      <Box>
        {(() => {
          switch (contentInfo?.type) {
            case ContentType.Iframe:
              return <div style={container}>View Iframe</div>;
            case ContentType.Audio:
              return <div style={container}>View Audio</div>;
            case ContentType.Video:
              return <div style={container}>View Video</div>;
            case ContentType.Survey:
              return <div style={container}>View Survey</div>;
            default:
              return (
                <BasicContent
                  rawHTML={contentInfo?.content}
                  container={container}
                />
              );
          }
        })()}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Button variant="contained">Next</Button>
      </Box>
    </>
  );
};
export default ViewContents;
