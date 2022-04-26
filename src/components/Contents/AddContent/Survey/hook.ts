import { useEffect, useState } from 'react';
import { getQuestions } from '../../../../services/QuestionService';
import { Question } from '../../../../types/questions';

export const useQuestion = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const getQuestionsData = async () => {
      const questionData = await getQuestions();
      setQuestions(questionData);
    };
    getQuestionsData();

    return () => {};
  }, []);

  return {
    questions
  };
};
