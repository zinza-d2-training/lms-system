import { Questions } from '../types/questions';
import { questions } from './../fakeData/questions';

export async function getQuestions() {
  const question = questions.map((item) => item);

  return question;
}

export async function getQuestionInfo(id: number) {
  const question = questions.find((item) => item.id === id);

  return question;
}

export async function createQuestion(question: Questions) {
  const newQuestion = {
    ...question,
    id: questions.length + 1,
    sequence: questions.length + 1
  };

  return newQuestion;
}

export async function updateQuestion(
  id: number,
  questionInfo: Omit<Questions, 'id'>
) {
  let question = questions.find((item) => item.id === id) as Questions;

  const index = questions.indexOf(question);

  questions[index] = { ...question, ...questionInfo };
}
