import { Question, QuestionsType } from '../types/questions';

export const questions: Question[] = [
  {
    id: 1,
    sequence: 1,
    questionName: 'question 1',
    contentId: 3,
    questionType: QuestionsType.Multiple,
    answer: ['hello', '1', '2']
  },
  {
    id: 2,
    sequence: 2,
    questionName: 'question 2',
    contentId: 3,
    questionType: QuestionsType.Raw
  },
  {
    id: 3,
    sequence: 3,
    questionName: 'question 3',
    contentId: 3,
    questionType: QuestionsType.Multiple,
    answer: ['']
  },
  {
    id: 4,
    sequence: 4,
    questionName: 'question 4',
    contentId: 3,
    questionType: QuestionsType.Single,
    answer: ['1']
  }
];
