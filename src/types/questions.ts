export enum QuestionType {
  Multiple = 'Multiple',
  Raw = 'Raw',
  Single = 'Single'
}

export type Questions = {
  id: number;
  sequence: number;
  question: string;
  answer: Array<string>;
  questionType: QuestionType;
};
