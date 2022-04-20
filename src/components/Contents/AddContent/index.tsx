import React from 'react';
import { useParams } from 'react-router-dom';
import AudioContent from './AudioContent';
import BasicContent from './BasicContent';
import IframeContent from './IframeContent';
import Survey from './Survey/Survey';
import VideoContent from './VideoContent';
import WebContent from './WebContent';

const AddContent = () => {
  const { type } = useParams() as { type: string };
  return (
    <>
      {(() => {
        switch (type) {
          case 'video':
            return <VideoContent />;

          case 'web':
            return <WebContent />;

          case 'audio':
            return <AudioContent />;

          case 'iframe':
            return <IframeContent />;

          case 'survey':
            return <Survey />;

          default:
            return <BasicContent />;
        }
      })()}
    </>
  );
};

export default AddContent;
