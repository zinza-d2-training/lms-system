import { useEffect, useState } from 'react';
import { getSurveyResponse } from '../../../services/SurveyResponseService';
import { QuestionResponse } from '../../../types/questions';

export const useSurveyResponse = (userId?: number, surveyId?: number) => {
  const [surveyRes, setSurveyRes] = useState<QuestionResponse[]>([]);

  useEffect(() => {
    const getData = async (userId?: number, surveyId?: number) => {
      if (userId && surveyId) {
        setSurveyRes(await getSurveyResponse(userId, surveyId));
      }
    };

    getData(userId, surveyId);

    return () => {};
  }, [userId, surveyId]);

  return surveyRes;
};
