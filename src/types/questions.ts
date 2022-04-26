export type Question = {
  id: number;
  sequence: number;
  contentId: number;
  questionName: string;
  questionType: QuestionsType;
  answer?: Array<string>;
};

export type QuestionForm = Pick<
  Question,
  'questionName' | 'questionType' | 'answer'
>;

export enum QuestionsType {
  Multiple = 'Multiple',
  Raw = 'Raw',
  Single = 'Single'
}
