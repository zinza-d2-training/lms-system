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
