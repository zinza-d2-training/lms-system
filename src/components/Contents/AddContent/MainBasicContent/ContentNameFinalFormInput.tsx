import { Box, Button, ButtonGroup, TextField, Typography } from '@mui/material';
import { useField, UseFieldConfig } from 'react-final-form';
import 'react-quill/dist/quill.snow.css';
import { CompletedMethod } from '../../../../types/contents';
import { DropDownBasicContentQuestion } from './DropDown';

interface Props {
  name: string;
  questionIdField?: string;
  periodTimeField?: string;
  config?: UseFieldConfig<string>;
  label?: string;
}

export const CompletedMethodFinalFormInput = ({
  name = 'completedMethod',
  questionIdField = 'question_id',
  periodTimeField = 'periodTime',
  config,
  label = 'How to complete it'
}: Props) => {
  const {
    input: { value, onChange }
  } = useField(name, config);
  const {
    input: { value: questionIdValue, onChange: onChangeQuestionId }
  } = useField(questionIdField);

  const changeValue = (value: CompletedMethod) => {
    onChange(value);
  };

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
        <Box className='container-question-select'>
          <Box sx={{ display: 'flex' }}>
            <Typography className="question-select" sx ={{
                fontSize : '14px',
            }}>
              Select a question
            </Typography>
            <DropDownBasicContentQuestion />
          </Box>
        </Box>
      )}
      {value === CompletedMethod.AfterPeriodTime && (
        <Box>
          <Box sx={{ display: 'flex' }}>
            <Typography className="label-after-of-time font-size-14">
              Time limit
            </Typography>
            <TextField
              size="small"
              placeholder="Seconds"
              id="filled-basic"
              name="seconds"
              className="input-after-of-time"
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};
