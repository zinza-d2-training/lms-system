import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { cloneDeep } from 'lodash';
import * as React from 'react';
import { useField } from 'react-final-form';
import { QuestionType } from '../../types/questions';
import '../SelectQuestionButtonFinalForm/Modal.css';
interface Props {
  name: string;
  forSurvey?: boolean;
  type: QuestionType;
}
interface AnswerFormField {
  text: string;
  isCorrect: boolean;
}
export default function AnswerFinalFormField({ name, forSurvey, type }: Props) {
  const {
    input: { onChange },
    meta
  } = useField<AnswerFormField[]>(name);
  const { submitFailed, error, initial } = meta;

  const [options, setOptions] = React.useState<AnswerFormField[]>([]);
  React.useEffect(() => {
    if (initial) {
      setOptions(initial);
    }
  }, [initial]);
  React.useEffect(() => {
    onChange(options.filter((option) => !!option.text));
  }, [onChange, options]);
  return (
    <div>
      <FormGroup
        sx={{
          mt: 2,
          width: '100%'
        }}>
        {options.map((item, index) => {
          const correctAnswerIdx = options.findIndex((item) => item.isCorrect); // using for single choice
          return (
            <>
              <Box
                sx={{
                  display: 'flex',
                  mt: 2
                }}>
                <TextField
                  value={item.text}
                  onChange={(e) => {
                    const val = e.target.value;
                    setOptions(
                      options.map((answer, i) => {
                        if (index === i) {
                          return {
                            text: val,
                            isCorrect: answer.isCorrect
                          };
                        }
                        return answer;
                      })
                    );
                  }}
                  sx={{ width: '100%', marginRight: '6px' }}
                  size="small"
                  id="outlined-disabled"
                  label="Answer"
                />
                {!forSurvey ? (
                  <FormControlLabel
                    sx={{
                      marginRight: '-12px'
                    }}
                    disabled={
                      correctAnswerIdx !== -1 &&
                      correctAnswerIdx !== index &&
                      type === QuestionType.Single
                    }
                    control={
                      <Checkbox
                        defaultChecked={item.isCorrect}
                        onChange={(e) => {
                          const val = e.target.checked;
                          setOptions(
                            options.map((answer, i) => {
                              if (index === i) {
                                return {
                                  text: answer.text,
                                  isCorrect: val
                                };
                              }
                              return answer;
                            })
                          );
                        }}
                      />
                    }
                    label="Correct"
                  />
                ) : null}
                <Button
                  onClick={() => {
                    setOptions(options.filter((opt, i) => index !== i));
                  }}>
                  <DeleteOutlineIcon />
                </Button>
              </Box>
            </>
          );
        })}
      </FormGroup>
      <Box sx={{ marginLeft: '18px', mt: 1 }}>
        <Typography variant="body2" color="#D32F2F">
          {submitFailed && error?.length && error[0]}
        </Typography>
      </Box>
      <Box>
        <Button
          sx={{ mt: 2 }}
          size="small"
          variant="contained"
          onClick={() => {
            const _answers = cloneDeep(options);
            _answers.push({
              text: '',
              isCorrect: false
            });
            setOptions(_answers);
          }}>
          Add Answer
        </Button>
      </Box>
    </div>
  );
}
