import { useContentInfo } from '../hook';
import { useParams } from 'react-router-dom';
import { ContentType } from '../../../types/contents';
const Contents = () => {
  const { contentId } = useParams() as { contentId: string };

  const { contentInfo } = useContentInfo(parseInt(contentId));

  const rawHTML = contentInfo?.content || '';

  return (
    <>
      {(() => {
        switch (contentInfo?.courseId) {
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
              <div style={container}>
                <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
              </div>
            );
        }
      })()}
    </>
  );
};
export default Contents;

const container = {
  width: 700,
  margin: '50px auto'
};
