import { Question, QuestionType } from '../types/questions';

export const questions: Question[] = [
  {
    id: 1,
    sequence: 1,
    text: 'question 1',
    type: QuestionType.Multiple,
    answers: [
      {
        id: 1,
        text: 'hello',
        isCorrect: true
      },
      {
        id: 2,
        text: 'hello',
        isCorrect: false
      },
      {
        id: 3,
        text: 'hello',
        isCorrect: false
      }
    ]
  },
  {
    id: 2,
    sequence: 2,
    text: 'question 2',
    type: QuestionType.Raw,
    answers: [
      {
        id: 1,
        text: 'hello',
        isCorrect: true
      },
      {
        id: 2,
        text: 'hello',
        isCorrect: false
      },
      {
        id: 3,
        text: 'hello',
        isCorrect: false
      }
    ]
  },
  {
    id: 3,
    sequence: 3,
    text: 'question 3',
    type: QuestionType.Multiple,
    answers: [
      {
        id: 1,
        text: 'hello',
        isCorrect: true
      },
      {
        id: 2,
        text: 'hello',
        isCorrect: false
      },
      {
        id: 3,
        text: 'hello',
        isCorrect: false
      }
    ]
  },
  {
    id: 4,
    sequence: 4,
    text: 'question 4',
    type: QuestionType.Single,
    answers: [
      {
        id: 1,
        text: 'hello',
        isCorrect: true
      },
      {
        id: 2,
        text: 'hello',
        isCorrect: false
      },
      {
        id: 3,
        text: 'hello',
        isCorrect: false
      }
    ]
  }
];