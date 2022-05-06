import { useContentInfo } from "../hook";
import { useParams } from 'react-router-dom';



// const rawHTML = `
// <div>
//   <p>The <strong>rat</strong> hates the <strong>cat</strong></p>
//   <p><i>This is something special</i></p>
//   <div>
//     <img src="https://www.kindacode.com/wp-content/uploads/2021/06/cute-dog.jpeg"/>
//   </div>
//   <h1>H1</h1>
//   <h2>H2</h2>
//   <h3>H3</h3>
//   <h4>Just Another Heading</h4>
// </div>
// `;

const Contents = () => {
  
  const { contentId } = useParams() as { contentId: string };
  
  const { contentInfo } = useContentInfo(parseInt(contentId));

  const rawHTML = contentInfo?.content || ''
  return (
    <div style={container}>
      <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
    </div>
  );
};

export default Contents;

// Styling
const container = {
  width: 500,
  margin: '50px auto'
};
