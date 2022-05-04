import { CompletedMethod, Content, ContentType } from '../types/contents';
import { QuestionType } from '../types/questions';

export const contents: Content[] = [
  {
    id: 1,
    name: 'intro',
    courseId: 1,
    completedMethod: CompletedMethod.WithQuestion,
    content: 'test content',
    sequence: 1,
    type: ContentType.Basic
  },
  {
    id: 2,
    name: 'start',
    courseId: 1,
    completedMethod: CompletedMethod.WithQuestion,
    content: 'test content',
    sequence: 2,
    type: ContentType.Basic
  },
  {
    id: 3,
    name: 'install',
    courseId: 1,
    completedMethod: CompletedMethod.WithCheckBox,
    content: 'test content 123',
    sequence: 3,
    type: ContentType.Survey,
    questions: [
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
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'action',
    courseId: 2,
    completedMethod: CompletedMethod.AfterPeriodTime,
    content: 'test content',
    sequence: 4,
    type: ContentType.Video,
    link: 'https://www.youtube.com/watch?v=TVU6OD-1Amo&t=185s'
  },
  {
    id: 5,
    name: 'install 2',
    courseId: 2,
    completedMethod: CompletedMethod.WithCheckBox,
    content: 'test content 123',
    sequence: 5,
    type: ContentType.Survey
  }
];
