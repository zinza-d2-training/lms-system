import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentType } from '../../../types/contents';
import AudioContent from './AudioContent';
import IframeContent from './IframeContent';
import BasicContent from './MainBasicContent/BasicContent';
import Survey from './Survey/Survey';
import VideoContent from './VideoContent';

const AddContent = () => {
  const { type } = useParams() as { type: string };
  return (
    <>
      {(() => {
        switch (type) {
          case ContentType.Video.toString():
            return <VideoContent />;
          case ContentType.Survey.toString():
            return <Survey />;
          case ContentType.Audio.toString():
            return <AudioContent />;
          case ContentType.Iframe.toString():
            return <IframeContent />;
          default:
            return <BasicContent />;
        }
      })()}
    </>
  );
};

export default AddContent;
