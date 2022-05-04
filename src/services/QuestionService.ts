import { questions } from '../fakeData/questions';
import { Question } from '../types/questions';
import { contents } from './../fakeData/contents';

export async function getQuestions(): Promise<Question[]> {
  return questions.map((item) => item);
}

export async function getQuestionInfo(questionId: number) {
  return questions.find((item) => item.id === questionId);
}

export async function createQuestion(Question: Question) {
  return {
    ...Question,
    id: questions.length + 1,
    sequence: questions.length + 1
  };
}

export async function reorderContentQuestions(
  contentId: number,
  orderMapping: Record<number, number>
) {
  const content = contents.find((item) => item.id === contentId);
  return content?.questions?.map((item) => {
    return {
      ...item,
      sequence: orderMapping[item.id] ? orderMapping[item.id] : item.sequence
    };
  });
}

export async function updateQuestion(
  id: number,
  questionInfo: Omit<Question, 'id'>
) {
  let question = questions.find((item) => item.id === id) as Question;

  const index = questions.indexOf(question);

  questions[index] = { ...question, ...questionInfo };
}
