import { useEffect, useState } from 'react';
import {
  getCourseContents,
  getLastContentsMapping
} from '../../services/ContentService';
import {
  FilterCourse,
  getCourseInfoForm,
  GetCourses,
  getCourses
} from '../../services/CourseService';
import { Content } from '../../types/contents';
import { CourseInfo } from '../../types/courses';

// Get courses
export const useGetCourses = (filterData: FilterCourse) => {
  const [courses, setCourses] = useState<GetCourses | undefined>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCourseData = async (filterData: FilterCourse) => {
      const res = await getCourses(filterData);
      setCourses(res);
      setLoading(false);
    };

    getCourseData(filterData);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(filterData)]);

  return {
    loading,
    courses
  };
};

// Get course by Id
export const useCourseData = (courseId?: number) => {
  const [courseInfo, setCourseInfo] = useState<CourseInfo | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourseData = async (courseId?: number) => {
      if (courseId) {
        const courseInfoData = (await getCourseInfoForm(
          courseId
        )) as unknown as CourseInfo;
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

export const useCourseLastContentMapping = (courseIds: number[]) => {
  const [mapping, setMapping] = useState<Map<number, number>>();

  useEffect(() => {
    const getMapping = async (courseIds: number[]) => {
      if (courseIds.length) {
        setMapping(await getLastContentsMapping(courseIds));
      }
    };

    getMapping(courseIds);

    return () => {};
  }, [courseIds]);

  return mapping;
};
