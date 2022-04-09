import { useEffect, useState } from 'react';
import { getCourseInfoForm } from '../../services/CourseService';
import { CourseInfo } from '../../types/courses';

export const useCourseData = (courseId?: number) => {
  const [courseInfo, setCourseInfo] = useState<CourseInfo | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourseData = async (courseId?: number) => {
      if (courseId) {
        const courseInfoData = (await getCourseInfoForm(courseId)) as CourseInfo;
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
