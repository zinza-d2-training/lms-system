import { Question } from './questions';

export enum CompletedMethod {
  WithCheckBox = 1,
  WithQuestion = 2,
  AfterPeriodTime = 3
}

export enum ContentType {
  Basic = 1,
  Video = 2,
  Audio = 3,
  Survey = 4,
  Iframe = 5
}

export enum VideoType {
  Link = 1,
  File = 2
}

export enum ShowAs {
  Embedded = 1,
  PopUp = 2
}
export type Content = {
  id: number;
  name: string;
  courseId: number;
  completedMethod?: CompletedMethod;
  content?: string;
  sequence: number;
  type: ContentType;
  link?: string;
  questions?: Array<Question>;
  completedQuestionId?: number;
  periodTime?: number;
  fileId?: number;
  videoType?: VideoType;
  showAs?: ShowAs;
  popUpWidth?: number;
  popUpHeight?: number;
};

export type ContentFormData = Omit<
  Content,
  'id' | 'sequence' | 'questions' | 'courseId'
> & {
  questions?: Array<number>;
  courseId?: number;
};

export type ContentInfo = Omit<Content, 'id' | 'sequence'>;
