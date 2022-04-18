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

export type Content = {
  id: number;
  name: string;
  courseId: number;
  completedMethod: CompletedMethod;
  content?: string;
  sequence: number;
  type: ContentType;
  link?: string;
  surveyId?: number;
};

export type ContentInfo = Omit<Content, 'id' | 'type' | 'courseId'>;
