import { CompletedMethod, Content, ContentType } from "../types/contents";

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
    type: ContentType.Survey
  },
  {
    id: 4,
    name: 'action',
    courseId: 1,
    completedMethod: CompletedMethod.AfterPeriodTime,
    content: 'test content',
    sequence: 4,
    type: ContentType.Video,
    link: 'https://www.youtube.com/watch?v=TVU6OD-1Amo&t=185s'
  }
]
