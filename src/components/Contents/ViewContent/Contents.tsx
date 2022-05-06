import { useContentInfo } from '../hook';
import { useParams } from 'react-router-dom';
const Contents = () => {
  const { contentId } = useParams() as { contentId: string };

  const { contentInfo } = useContentInfo(parseInt(contentId));

  const rawHTML = contentInfo?.content || '';
  return (
    <div style={container}>
      <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
    </div>
  );
};
export default Contents;

const container = {
  width: 700,
  margin: '50px auto'
};
