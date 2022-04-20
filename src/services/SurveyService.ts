import { Surveys } from '../types/surveys';
import { surveys } from './../fakeData/surveys';


export async function getSurveyInfo(id: number) {
  return surveys.find((item) => item.id === id);
}

export async function createSurvey(Survey: Surveys) {
  const newSurvey = {
    ...Survey,
    id: surveys.length + 1,
    sequence: surveys.length + 1
  };

  return newSurvey;
}

export async function updateQuestion(
  id: number,
  surveyInfo: Omit<Surveys, 'id'>
) {
  let survey = surveys.find((item) => item.id === id) as Surveys;

  const index = surveys.indexOf(survey);

  surveys[index] = { ...survey, ...surveyInfo };
}
