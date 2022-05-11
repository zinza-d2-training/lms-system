import { useEffect, useState } from 'react';
import { getUserFiles } from '../../../services/FileService';
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
