import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { Autocomplete, TextField } from 'mui-rff';
import React from 'react';
import { useField, UseFieldConfig } from 'react-final-form';
import 'react-quill/dist/quill.snow.css';
import { CompletedMethod, ContentType } from '../../../../types/contents';
import { SelectQuestionButtonFinalForm } from '../../../SelectQuestionButtonFinalForm';
import { questions } from '../../../../fakeData/questions';
interface Props {
  name: string;

  questionIdField: string;
  periodTimeField: string;
  config?: UseFieldConfig<string>;
  label?: string;
}

export const CompletedMethodFinalFormInput = ({
  name,
  questionIdField,
  periodTimeField,
  config,
  label
}: Props) => {
  const {
    input: { value, onChange }
  } = useField(name, config);

  const changeValue = (value: CompletedMethod) => {
    onChange(value);
  };

  const getQuestions = React.useCallback(() => questions, []);
  const allQuestions = React.useMemo(() => {
    return getQuestions();
  }, [getQuestions]);

  return (
    <Box
      sx={{
        borderTop: '1px solid #eeeeee',
        borderBottom: '1px solid #ffffff',
        mt: 1,
        alignItems: 'center',
        paddingTop: '14px'
      }}
      className="container-option-complete">
      <Typography
        sx={{
          marginLeft: '32px',
          fontSize: '14px'
        }}>
        {label}
      </Typography>
      <Box
        sx={{
          marginLeft: '188px',
          marginTop: '-28px'
        }}
        className="container-button"
        aria-label="basic tabs example">
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button
            disabled={value === CompletedMethod.WithCheckBox}
            onClick={() => changeValue(CompletedMethod.WithCheckBox)}>
            With a checkbox
          </Button>
          <Button
            disabled={value === CompletedMethod.WithQuestion}
            onClick={() => changeValue(CompletedMethod.WithQuestion)}>
            With a question
          </Button>
          <Button
            disabled={value === CompletedMethod.AfterPeriodTime}
            onClick={() => changeValue(CompletedMethod.AfterPeriodTime)}>
            After a period time
          </Button>
        </ButtonGroup>
      </Box>
      {value === CompletedMethod.WithQuestion && (
        <Box className="container-question-select" sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', marginLeft: '42px' }}>
            <Typography
              className="question-select"
              sx={{
                fontSize: '14px'
              }}>
              Select a question
            </Typography>
            <Box
              sx={{
                marginTop: '12px',
                marginLeft: '24px'
              }}>
              <SelectQuestionButtonFinalForm name={questionIdField} />
            </Box>

            <Box>
              <Autocomplete<number, false, true, false>
                label="Select a question"
                name={questionIdField}
                options={allQuestions.map((item) => item.id)}
                disableClearable
                getOptionLabel={(option) =>
                  allQuestions.find((item) => item.id === option)?.text || ''
                }
                size="small"
                sx={{ width: '300px' }}
              />
            </Box>
          </Box>
        </Box>
      )}
      {value === CompletedMethod.AfterPeriodTime && (
        <Box sx={{ marginBottom: '12px', mt: 1 }}>
          <Box sx={{ display: 'flex', marginLeft: '87px' }}>
            <Typography
              className="label-after-of-time font-size-14"
              sx={{ marginTop: '12px' }}>
              Time limit
            </Typography>
            <Box
              sx={{
                mt: '12px',
                marginLeft: '10px'
              }}>
              <TextField
                size="small"
                type="number"
                placeholder="Seconds"
                id="filled-basic"
                name={periodTimeField}
                className="input-after-of-time"
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
