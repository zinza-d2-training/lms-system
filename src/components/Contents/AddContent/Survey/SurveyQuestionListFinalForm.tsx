import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import {
  Box,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { sortBy } from 'lodash';
import React, { useMemo, useState } from 'react';
import { useField } from 'react-final-form';
import { Question, QuestionType } from '../../../../types/questions';
import { CustomizedMenus } from '../../../Courses/ListCourses/MenuActions';
import { QuestionDialogForm } from '../../../SelectQuestionButtonFinalForm/QuestionDialogForm';
import { QuestionIconsByType } from '../../../common/IconsType';

interface Props {
  questions: Question[];
  name: string;
}

const SurveyQuestionListFinalForm = (props: Props) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [type, setType] = useState<QuestionType>(QuestionType.Multiple);
  const [questionId, setQuestionId] = useState<number>();
  const {
    input: { value, onChange }
  } = useField(props.name);

  const sortedQuestions = useMemo(() => {
    return sortBy(props.questions, 'sequence');
  }, [props.questions]);

  const handleOnclick = (type: QuestionType, id: number) => {
    setOpenPopup(true);
    setType(type);
    setQuestionId(id);
  };
  return (
    <>
      <Box>
        <Box>
          <TableContainer sx={{ padding: '0' }}>
            <Table
              sx={{ minWidth: 650, textAlign: 'center', padding: '0' }}
              size="small"
              aria-label="customized table">
              <TableHead className="table-head">
                <TableRow>
                  <TableCell align="left">USE</TableCell>
                  <TableCell align="left">TYPE</TableCell>
                  <TableCell align="center">QUESTION</TableCell>
                  <TableCell align="right">OPTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedQuestions &&
                  sortedQuestions.map((question) => {
                    const checked = value.includes(question.id);
                    return (
                      <TableRow
                        className="table-row-content"
                        key={question.id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 }
                        }}>
                        <TableCell component="th" scope="row" align="left">
                          <Button
                            size="small"
                            onClick={(e) => {
                              onChange(
                                checked
                                  ? (value as number[]).filter(
                                      (item) => Number(item) !== question.id
                                    )
                                  : [...value, question.id]
                              );
                            }}
                            type="button">
                            {checked ? 'Added' : 'Add'}
                          </Button>
                        </TableCell>
                        <TableCell component="th" scope="row" align="left">
                          <QuestionIconsByType type={question.type} />
                        </TableCell>
                        <TableCell align="center">{question.text}</TableCell>
                        <TableCell align="right">
                          <CustomizedMenus
                            items={[
                              {
                                to: `#`,
                                label: 'Preview',
                                icon: <RemoveRedEyeOutlinedIcon />
                              },
                              {
                                to: `#`,
                                label: 'Edit',
                                icon: <ModeEditOutlinedIcon />,
                                onClick: () =>
                                  handleOnclick(question.type, question.id)
                              },
                              {
                                to: `#`,
                                label: 'Delete',
                                icon: <ClearOutlinedIcon />
                              }
                            ]}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            className="box-container-footer"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '16px'
            }}>
            <Box>
              <button>1 to 1 of 1</button>
            </Box>

            <Box className="box-container-footer-right">
              <SaveAltIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
      {openPopup && (
        <QuestionDialogForm
          type={type}
          id={questionId}
          forSurvey
          onCreated={(qId) => qId}
          handleClose={() => setOpenPopup(false)}
        />
      )}
    </>
  );
};

export default SurveyQuestionListFinalForm;
