import { Surveys } from "../types/surveys";


export const surveys: Surveys[] = [
  {
    id: 1,
    surveyName: 'survey 1',
    sequence: 5,
    questionId: [1, 2, 3]
  },
  {
    id: 2,
    surveyName: 'survey 2',
    sequence: 1,
    questionId: [2, 3]
  },
  {
    id: 3,
    surveyName: 'survey 3',
    sequence: 1,
    questionId: [1, 2, 3, 4]
  },
  {
    id: 4,
    surveyName: 'survey 4',
    sequence: 1,
    questionId: [2, 3, 4]
  },
]
