import React from 'react';
import { useParams } from 'react-router-dom';
import { ContentType } from '../../../types/contents';
import BasicContent from './MainContent/BasicContent';
import Survey from './Survey/Survey';

const AddContent = () => {
  const { type } = useParams() as { type: string };
  return (
    <>
      {(() => {
        switch (type) {
          case ContentType.Survey.toString():
            return <Survey />;
          default:
            return <BasicContent />;
        }
      })()}
    </>
  );
};

export default AddContent;
