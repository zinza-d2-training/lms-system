export enum CompletedMethod {
  WithCheckBox = 1,
  WithQuestion = 2,
  AfterPeriodTime = 3
}

export enum ContentType {
  Basic = 'basic',
  Video = 'video',
  Audio = 'audio',
  Survey = 'survey',
  Iframe = 'iframe'
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

export type ContentInfo = Omit<Content, 'id' | 'courseId'>;
