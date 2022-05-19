import { surveyResponses } from '../fakeData/surveyResponses';

export async function getSurveyResponse(useId: number, surveyId: number) {
  return surveyResponses.map((item) => item);
}
