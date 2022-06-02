import { Box, Button, Typography } from '@mui/material';
import { makeValidate } from 'mui-rff';
import React, { useMemo } from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { SurveyResponseForm } from '../../../types/questions';
import { useContentInfo } from '../hook';
import { useSurveyResponse } from './hook';
import SurveyResponseFinalForm from './SurveyResponseFinalForm';

const ViewSurveysContent = () => {
  const { id, contentId } = useParams() as { id: string; contentId: string };
  const { contentInfo } = useContentInfo(parseInt(id), parseInt(contentId));
  const surveyRes = useSurveyResponse();
  const initialValues = useMemo<SurveyResponseForm>(() => {
    return {
      qResponses: surveyRes.map((item) => item) || []
    };
  }, [surveyRes]);

  const schema: Yup.SchemaOf<SurveyResponseForm> = Yup.object().shape({
    qResponses: Yup.array()
  });
  const validate = makeValidate(schema);

  const handleSubmit = async (value: SurveyResponseForm) => {};

  return (
    <Box>
      <Form<SurveyResponseForm>
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validate={validate}
        render={({ handleSubmit, invalid, submitting }) => {
          return (
            <form
              onSubmit={handleSubmit}
              style={{
                width: '100%',
                padding: '6px',
                float: 'left',
                borderRadius: '8px',
                boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
              }}>
              <Typography
                variant="h4"
                sx={{ alignItems: 'center', textAlign: 'center' }}>
                Survey Form
              </Typography>
              <Box sx={{ float: 'left' }}>
                <Box>
                  <SurveyResponseFinalForm
                    name="qResponses"
                    questions={contentInfo?.questions}
                  />
                </Box>
                <Button type="submit" variant="outlined" sx={{ float: 'left' }}>
                  Submit survey
                </Button>
              </Box>
            </form>
          );
        }}
      />
    </Box>
  );
};

export default ViewSurveysContent;
