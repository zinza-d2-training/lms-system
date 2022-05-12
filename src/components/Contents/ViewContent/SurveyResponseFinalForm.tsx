import { FormControlLabel } from '@material-ui/core';
import {
  Box,
  Checkbox,
  FormGroup,
  List,
  ListItem,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import { cloneDeep } from 'lodash';
import React from 'react';
import { useField } from 'react-final-form';
import {
  Question,
  QuestionResponse,
  QuestionType
} from '../../../types/questions';

interface Props {
  name: string;
  questions?: Array<Question>;
}
const SurveyResponseFinalForm = ({ name, questions }: Props) => {
  const {
    input: { value, onChange },
    meta
  } = useField<QuestionResponse[]>(name);
  const { submitFailed, error } = meta;

  return (
    <div>
      {questions?.map((item, index) => (
        <List disablePadding key={item.id}>
          <ListItem
            disablePadding
            sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ paddingRight: '10px' }}>
                Question {index + 1}:
              </Typography>
              <Typography>{item.text}</Typography>
            </Box>
            <Box>
              {(() => {
                switch (item.type) {
                  case QuestionType.Multiple:
                    return (
                      <FormGroup>
                        {item.answers.map((answerItem) => (
                          <FormControlLabel
                            key={answerItem.id}
                            label={answerItem.text}
                            control={
                              <Checkbox
                                checked={value.some(
                                  (res) =>
                                    res.questionId === item.id &&
                                    res.answers.some(
                                      (aws) => aws.answerId === answerItem.id
                                    )
                                )}
                                onChange={(e) => {
                                  const existed = value.find(
                                    (res) => res.questionId === item.id
                                  );
                                  let _value = cloneDeep(value);
                                  if (!existed) {
                                    _value.push({
                                      questionId: item.id,
                                      answers: [
                                        {
                                          answerId: answerItem.id
                                        }
                                      ]
                                    });
                                  } else {
                                    _value = _value.map((res) => {
                                      if (res.questionId === item.id) {
                                        const answerExisted = res.answers.find(
                                          (awsItem) =>
                                            awsItem.answerId === answerItem.id
                                        );
                                        if (!answerExisted) {
                                          return {
                                            questionId: item.id,
                                            answers: [
                                              ...res.answers,
                                              {
                                                answerId: answerItem.id
                                              }
                                            ]
                                          };
                                        } else {
                                          return {
                                            questionId: item.id,
                                            answers: [
                                              ...res.answers.filter(
                                                (v) =>
                                                  v.answerId !== answerItem.id
                                              )
                                            ]
                                          };
                                        }
                                      }
                                      return res;
                                    });
                                  }
                                  onChange(_value);
                                }}
                              />
                            }
                          />
                        ))}
                      </FormGroup>
                    );
                  case QuestionType.Single:
                    return (
                      <RadioGroup>
                        {item.answers.map((answerItem) => (
                          <FormControlLabel
                            key={answerItem.id}
                            value={answerItem.text}
                            label={answerItem.text}
                            control={
                              <Radio
                                checked={value.some(
                                  (res) =>
                                    res.questionId === item.id &&
                                    res.answers.some(
                                      (aws) => aws.answerId === answerItem.id
                                    )
                                )}
                                onChange={(e) => {
                                  const existed = value.find(
                                    (res) => res.questionId === item.id
                                  );
                                  let _value = cloneDeep(value);
                                  if (!existed) {
                                    _value.push({
                                      questionId: item.id,
                                      answers: [
                                        {
                                          answerId: answerItem.id
                                        }
                                      ]
                                    });
                                  } else {
                                    _value = _value.map((res) => {
                                      if (res.questionId === item.id) {
                                        return {
                                          questionId: item.id,
                                          answers: [
                                            {
                                              answerId: answerItem.id
                                            }
                                          ]
                                        };
                                      }
                                      return res;
                                    });
                                  }
                                  onChange(_value);
                                }}
                              />
                            }
                          />
                        ))}
                      </RadioGroup>
                    );
                  default:
                    return (
                      <TextField
                        key={item.id}
                        multiline
                        value={
                          value.find((val) => val.questionId === item.id)
                            ?.answers[0].value
                        }
                        onChange={(e) => {
                          const existed = value.find(
                            (res) => res.questionId === item.id
                          );
                          let _value = cloneDeep(value);
                          if (!existed) {
                            _value.push({
                              questionId: item.id,
                              answers: [{ value: e.target.value }]
                            });
                          } else {
                            _value = _value.map((res) => {
                              if (res.questionId === item.id) {
                                return {
                                  questionId: item.id,
                                  answers: [{ value: e.target.value }]
                                };
                              }
                              return res;
                            });
                          }
                          onChange(_value);
                        }}
                      />
                    );
                }
              })()}
              <Box sx={{ marginLeft: '18px', mt: 1 }}>
                <Typography variant="body2" color="#D32F2F">
                  {submitFailed && error?.length && error[0]}
                </Typography>
              </Box>
            </Box>
          </ListItem>
        </List>
      ))}
    </div>
  );
};

export default SurveyResponseFinalForm;
