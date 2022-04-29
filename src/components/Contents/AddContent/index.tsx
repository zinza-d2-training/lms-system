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
          case '2':
            return <VideoContent />;
          case '4':
            return <Survey />;
          case '3':
            return <AudioContent />;
          case '5':
            return <IframeContent />;
          case '6':
            return <WebContent />;
          default:
            return <BasicContent />;
        }
      })()}
    </>
  );
};

export default AddContent;
