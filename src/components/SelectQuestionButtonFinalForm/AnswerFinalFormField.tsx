import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { cloneDeep } from 'lodash';
import * as React from 'react';
import { useField } from 'react-final-form';
import '../SelectQuestionButtonFinalForm/Modal.css';
interface Props {
  name: string;
}
interface AnswerFormField {
  text: string;
  isCorrect: boolean;
}
export default function AnswerFinalFormField({ name }: Props) {
  const {
    input: { value, onChange }
  } = useField<AnswerFormField[]>(name);

  return (
    <div>
      
      <FormGroup
        sx={{
          mt: 2,
          width: '100%'
        }}>
        
        {(value || []).map((item, index) => {
          return (
            <Box
              sx={{
                display: 'flex',
                mt: 2
              }}>
              <TextField
                value={item.text}
                onChange={(e) => {
                  const val = e.target.value;
                  onChange(
                    value.map((answer, i) => {
                      if (index === i) {
                        return {
                          text: val,
                          isCorrect: answer.isCorrect
                        };
                      }
                      return answer;
                    })
                  );
                  console.log(val.length);
                }}
                sx={{ width: '100%', marginRight: '6px' }}
                size="small"
                id="outlined-disabled"
                label="Answer"
              />
              <FormControlLabel
                sx={{
                  marginRight: '-12px'
                }}
                control={
                  <Checkbox
                    defaultChecked={item.isCorrect}
                    onChange={(e) => {
                      const val = e.target.checked;

                      onChange(
                        value.map((answer, i) => {
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
              <Button
                onClick={() => {
                  onChange(value.filter((opt, i) => index !== i));
                }}>
                <DeleteOutlineIcon />
              </Button>
            </Box>
          );
        })}
      </FormGroup>
      <Box>
        <Button
          sx={{ mt: 2 }}
          size="small"
          variant="contained"
          onClick={() => {
            const _answers = cloneDeep(value || []);
            _answers.push({
              text: '',
              isCorrect: false
            });
            onChange(_answers);
          }}>
          Add Answer
        </Button>
      </Box>
    </div>
  );
}
