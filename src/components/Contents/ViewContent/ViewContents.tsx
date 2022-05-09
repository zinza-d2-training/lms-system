import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Link, Typography } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { ContentType, ShowAs } from '../../../types/contents';
import { useCourseData } from '../../Courses/hook';
import '../AddContent/MainContent/StyleTabBasicContent.css';
import { useContentInfo } from '../hook';
const ViewContents = () => {
  const { id, contentId } = useParams() as { id: string; contentId: string };
  const { courseInfo } = useCourseData(parseInt(id));
  const { contentInfo } = useContentInfo(parseInt(contentId));
  console.log('contentInfo', contentInfo);
  console.log('link audio : ', contentInfo?.link);

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
              return (
                <div>
                  {contentInfo.showAs === ShowAs.Embedded && (
                    <div>
                      <iframe
                        className="view-content-iframe"
                        src={contentInfo.link}></iframe>
                    </div>
                  )}
                  {contentInfo.showAs === ShowAs.PopUp && <p>Open-newTab</p>}
                </div>
              );
            case ContentType.Audio:
              return (
                <Box
                  className="container-viewContent-audio"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'start',
                    height: '100%'
                  }}>
                  <audio controls className="viewContent-audio">
                    <source src={contentInfo?.link} type="audio/mpeg" />
                  </audio>
                </Box>
              );
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
