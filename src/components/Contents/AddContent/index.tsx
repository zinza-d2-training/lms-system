import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentType } from '../../../types/contents';
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
          case ContentType.Video.toString():
            return <VideoContent />;
          case ContentType.Survey.toString():
            return <Survey />;
          case ContentType.Audio.toString():
            return <AudioContent />;
          case ContentType.Iframe.toString():
            return <IframeContent />;
          case ContentType.Web.toString():
            return <WebContent />;
          default:
            return <BasicContent />;
        }
      })()}
    </>
  );
};

export default AddContent;
