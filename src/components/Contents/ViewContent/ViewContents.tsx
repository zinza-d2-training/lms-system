import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Link, Typography } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { ContentType } from '../../../types/contents';
import { useCourseData } from '../../Courses/hook';
import { useContentInfo } from '../hook';

// import { BasicContent } from './BasicContent';
const ViewContents = () => {
  const { id, contentId } = useParams() as { id: string; contentId: string };
  const { courseInfo } = useCourseData(parseInt(id));
  const { contentInfo } = useContentInfo(parseInt(contentId));
  // const rawHTML = contentInfo?.content || '';
  console.log(contentInfo);

  return (
    <Box display="flex" flexDirection="column" height="100vh">
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
      <Box
        display="flex"
        flex="1"
        justifyContent="center"
        px={8}
        py={5}
        flexDirection="column"
        sx={{
          height: 'calc(100vh - 57px)',
          overflowY: 'auto'
        }}>
        {(() => {
          switch (contentInfo?.type) {
            case ContentType.Iframe:
              return <div>View Iframe</div>;
            case ContentType.Audio:
              return <div>View Audio</div>;
            case ContentType.Video:
              return <div>View Video</div>;
            case ContentType.Survey:
              return <div>View Survey</div>;
            default:
              return (
                <div
                  dangerouslySetInnerHTML={{
                    __html: contentInfo?.content || ''
                  }}></div>
              );
          }
        })()}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Button variant="contained" sx={{ mt: 5 }}>
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default ViewContents;
