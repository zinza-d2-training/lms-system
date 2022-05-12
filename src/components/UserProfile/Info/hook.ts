import { useEffect, useState } from 'react';
import { getCourseUser } from '../../../services/CourseService';
import { getUserFiles } from '../../../services/FileService';
import { CourseCompletion } from '../../../types/courses';
import { File } from '../../../types/files';

export const useFileUser = (userId: number) => {
  const [filesData, setFilesData] = useState<File[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getFiles = async (userId: number) => {
      if (userId) {
        const filesInfo = await getUserFiles(userId);
        setFilesData(filesInfo);
      }
      setLoading(false);
    };

    getFiles(userId);

    return () => {};
  }, [userId]);

  return {
    filesData,
    loading
  };
};

export const useCourseUser = (userId: number) => {
  const [coursesData, setCoursesData] = useState<CourseCompletion[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getFiles = async (userId: number) => {
      if (userId) {
        const filesInfo = await getCourseUser(userId);
        setCoursesData(filesInfo);
      }
      setLoading(false);
    };

    getFiles(userId);

    return () => {};
  }, [userId]);

  return {
    coursesData,
    loading
  };
};
