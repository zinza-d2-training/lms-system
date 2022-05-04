import React from 'react';
import { useParams } from 'react-router-dom';
import { useContentInfo } from './hook';

const Contents = () => {
  const { contentId } = useParams() as { contentId: string };
  const { contentInfo } = useContentInfo(parseInt(contentId));

  return <></>;
};

export default Contents;
