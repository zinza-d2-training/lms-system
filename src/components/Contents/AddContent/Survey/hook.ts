import { useEffect, useState } from 'react';
import {
  getQuestionInfo,
  getQuestions
} from '../../../../services/QuestionService';
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

export const useQuestionInfo = (questionId: number) => {
  const [questionInfo, setQuestionInfo] = useState<Question | undefined>();

  useEffect(() => {
    const getQuestion = async (questionId: number) => {
      if (questionId) {
        const info = await getQuestionInfo(questionId);
        setQuestionInfo(info);
      }
    };
    getQuestion(questionId);

    return () => {};
  }, [questionId]);

  return {
    questionInfo
  };
};
