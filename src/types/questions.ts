export type Question = {
  id: number;
  sequence: number;
  contentId: number;
  text: string;
  type: QuestionsType;
  answers?: Array<Answer>;
};

export type Answer = {
  id: number;
  text: string;
  isCorrect?: boolean;
};
export type QuestionForm = Pick<Question, 'text' | 'type' | 'answers'>;

export enum QuestionsType {
  Multiple = 2,
  Raw = 2,
  Single = 3,
}
