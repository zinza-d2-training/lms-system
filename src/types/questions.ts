export type Question = {
  id: number;
  sequence: number;
  text: string;
  type: QuestionType;
  answers: Array<Answer>;
};

export type Answer = {
  id: number;
  text: string;
  isCorrect?: boolean;
};

export type QuestionForm = Partial<Pick<Question, 'text' | 'answers'>>;

export enum QuestionType {
  Multiple = 1,
  Raw = 2,
  Single = 3
}

export type QuestionResponse = {
  questionId: number;
  answers: Array<{
    value?: string;
    answerId?: number;
  }>;
};
export type SurveyResponseForm = {
  qResponses: Array<QuestionResponse>;
};
