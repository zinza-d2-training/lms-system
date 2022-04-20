import { Questions, QuestionType } from "../types/questions";

export const questions: Questions[] = [
  {
    id: 1,
    sequence: 1,
    question: 'test the first one',
    questionType: QuestionType.Raw,
    answer: ['']
  },
  {
    id: 2,
    sequence: 2,
    question: 'test the first one',
    questionType: QuestionType.Multiple,
    answer: ['one', 'two', 'three']
  },
  {
    id: 3,
    sequence: 3,
    question: 'test the first one',
    questionType: QuestionType.Raw,
    answer: ['']
  },
  {
    id: 4,
    sequence: 4,
    question: 'test the first one',
    questionType: QuestionType.Single,
    answer: ['test']
  }
]
