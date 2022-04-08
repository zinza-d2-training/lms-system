import { useEffect, useState } from 'react';
import { getCourseInfoForm } from '../../services/CourseService';
import { CoursesDB } from '../../types/courses';

export const useCourseData = (courseId?: number) => {
  const [courseInfo, setCourseInfo] = useState<CoursesDB | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourseData = async (courseId?: number) => {
      if (courseId) {
        const courseInfoData = (await getCourseInfoForm(courseId)) as CoursesDB;
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
