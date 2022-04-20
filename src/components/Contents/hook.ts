
import { useState, useEffect } from 'react';
import { getContentDetail } from '../../services/ContentService';
import { Content } from '../../types/contents';
export const useContentInfo = (contentId: number) => {
  const [contentInfo, setContentInfo] = useState<Content | undefined>()

  useEffect(() => {
    const getContentInfo = async (contentId: number) => {
      if (contentId) {
        const contentInfoData = await getContentDetail(contentId) as Content
        setContentInfo(contentInfoData)
      }
    }

    getContentInfo(contentId)

    return () => {}
  })

  return {
    contentInfo
  }
}
