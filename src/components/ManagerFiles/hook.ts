import { useEffect, useState } from 'react';
import { getFiles } from '../../services/FileService';
import { File } from '../../types/files';

export const useCourseFiles = (courseId?: number) => {
  const [filesData, setFilesData] = useState<File[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getContentFile = async (courseId?: number) => {
      if (courseId) {
        const filesInfo = await getFiles(courseId);
        setFilesData(filesInfo);
      }
      setLoading(false);
    };

    getContentFile(courseId);

    return () => {};
  }, [courseId]);

  return {
    filesData,
    loading
  };
};
