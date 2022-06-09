import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Link, Typography } from '@mui/material';
import { orderBy } from 'lodash';
import { useMemo } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { ContentType, ShowAs } from '../../../types/contents';
import { useContentData, useCourseData } from '../../Courses/hook';
import '../AddContent/MainContent/StyleTabBasicContent.css';
import { useContentInfo } from '../hook';
import ViewSurveysContent from './ViewSurveysContent';
const ViewContents = () => {
  const { id, contentId } = useParams() as { id: string; contentId: string };
  const { courseInfo } = useCourseData(parseInt(id));
  const { contentInfo } = useContentInfo(parseInt(id), parseInt(contentId));
  const { contentData } = useContentData(parseInt(id));

  console.log(typeof courseInfo);

  const orderContent = useMemo(() => {
    return orderBy(contentData, ['sequence'], ['asc']);
  }, [contentData]);

  const currentContent = orderContent.find(
    (i) => i.sequence === contentInfo?.sequence
  );
  const handleClickButton = () => {
    window.open(`${contentInfo?.link}`, 'name', 'settings');
  };

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
                        src={contentInfo.link}
                        title="Iframe Content"></iframe>
                    </div>
                  )}
                  {contentInfo.showAs === ShowAs.PopUp && (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                      <Button
                        sx={{
                          padding: '20px 60px',
                          marginBottom: '40px',
                          backgroundColor: '#000fe6',
                          fontWeight: 800
                        }}
                        size="large"
                        variant="contained"
                        onClick={handleClickButton}>
                        Start
                      </Button>
                    </Box>
                  )}
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
              return (
                <Box
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    minWidth: '215px'
                  }}>
                  <video
                    crossOrigin="anonymous"
                    autoPlay
                    preload="auto"
                    src={`${contentInfo?.link}`}
                    controls
                    style={{
                      height: '592px'
                    }}>
                    <source src={`${contentInfo?.link}`} type="video/mp4" />
                  </video>
                </Box>
              );
            case ContentType.Survey:
              return <ViewSurveysContent />;
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
          <Button
            variant="contained"
            sx={{
              mt: 5,
              backgroundColor: '#f5f5f5',
              color: '#333333',
              textTransform: 'capitalize',
              fontWeight: '700',
              fontSize: '18px'
            }}>
            {currentContent &&
            orderContent.indexOf(currentContent) + 1 < orderContent.length ? (
              <Link
                component={RouterLink}
                to={`/view/${id}/content/${
                  orderContent.at(orderContent.indexOf(currentContent) + 1)?.id
                }`}
                underline="none"
                color="inherit">
                Next
              </Link>
            ) : (
              <Link
                component={RouterLink}
                to={`/`}
                underline="none"
                color="inherit">
                Complete
              </Link>
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default ViewContents;
