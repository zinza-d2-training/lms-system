import { useEffect, useState } from 'react';
import { getCourseContents } from '../../services/ContentService';
import { getCourseInfoForm } from '../../services/CourseService';
import { Content } from '../../types/contents';
import { CourseInfo } from '../../types/courses';

export const useCourseData = (courseId?: number) => {
  const [courseInfo, setCourseInfo] = useState<CourseInfo | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourseData = async (courseId?: number) => {
      if (courseId) {
        const courseInfoData = (await getCourseInfoForm(
          courseId
        )) as CourseInfo;
        setCourseInfo(courseInfoData);
      }
      setLoading(false);
    };

    getCourseData(courseId);

    return () => {};
  }, [courseId]);

  return {
    courseInfo,
    loading
  };
};

export const useContentData = (courseId?: number) => {
  const [contentData, setContentData] = useState<Content[]>([]);

  useEffect(() => {
    const getContentData = async (courseId?: number) => {
      if (courseId) {
        const contentInfo = await getCourseContents(courseId);
        setContentData(contentInfo);
      }
    };

    getContentData(courseId);

    return () => {};
  }, [courseId]);

  return {
    contentData
  };
};
