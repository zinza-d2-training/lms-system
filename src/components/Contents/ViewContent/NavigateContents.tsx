import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContentData } from '../../Courses/hook';

const NavigateContents = () => {
  const { id } = useParams() as { id: string };
  const { contentData } = useContentData(Number(id));
  console.log('12', id);
  const navigate = useNavigate();
  if (id) {
    navigate(`/view/${id}/content/${contentData[0]?.id}`);
  }
  return <>Loading...</>;
};

export default NavigateContents;
