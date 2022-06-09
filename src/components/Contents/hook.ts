import { useState, useEffect } from 'react';
import { getContentDetail } from '../../services/ContentService';
import { Content, ContentInfo } from '../../types/contents';
export const useContentInfo = (courseId: number, contentId: number) => {
  const [contentInfo, setContentInfo] = useState<Content | undefined>();

  useEffect(() => {
    const getContentInfo = async (courseId: number, contentId: number) => {
      const contentInfoData = (await getContentDetail(
        courseId,
        contentId
      )) as unknown as Content;
      setContentInfo(contentInfoData);
    };

    getContentInfo(courseId, contentId);

    return () => {};
  }, [contentId, courseId]);

  return {
    contentInfo
  };
};
