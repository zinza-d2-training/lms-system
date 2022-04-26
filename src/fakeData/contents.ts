import { CompletedMethod, Content, ContentType } from '../types/contents';
import { QuestionsType } from '../types/questions';

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
