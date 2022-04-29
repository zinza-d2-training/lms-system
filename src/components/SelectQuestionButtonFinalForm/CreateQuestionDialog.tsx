import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import { makeValidate } from 'mui-rff';
import * as React from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { QuestionType } from '../../types/contents';
import { QuestionForm } from '../../types/questions';
import { EditorField } from '../Contents/Editer/EditorField';
import CreateChoiceQuestion from './AnswerFinalFormField';
import CreateFreeTextQuestion from './CreateFreeTextQuestion';
export interface Props {
  type: QuestionType;
  onCreated: (id: number) => void;
  handleClose: () => void;
}

export const CreateQuestionDialog = ({
  type,
  handleClose,
  onCreated
}: Props) => {
  const schema: Yup.SchemaOf<QuestionForm> = Yup.object().shape({
    text: Yup.string()
      .max(80)
      .required('Error : Text content is a required field'),
    answers: Yup.array().min(1, 'Error : Need at least one valid field')
  });

  const descriptionElementRef = React.useRef<HTMLElement>(null);

  const validate = makeValidate(schema);

  const handleSubmit = (value: QuestionForm) => {
    // @TODO: create question and trigger onCreated
    onCreated(1);
    console.log(value);
    handleClose();
  };
  return (
    <Dialog className="Container-dialog-question" open scroll="paper">
      <DialogTitle id="scroll-dialog-title" sx={{ color: 'red' }}>
        Please write your question :
      </DialogTitle>
      <Form<QuestionForm>
        validate={validate}
        initialValues={{
          text: '',
          answers: []
        }}
        onSubmit={handleSubmit}
        render={({ handleSubmit, errors }) => {
          return (
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto'
              }}>
              <DialogContent dividers>
                <DialogContentText
                  id="scroll-dialog-description"
                  ref={descriptionElementRef}
                  tabIndex={-1}>
                  <Box>
                    <EditorField name="text" />
                  </Box>

                  {type === QuestionType.FreeText ? (
                    <CreateFreeTextQuestion />
                  ) : (
                    <CreateChoiceQuestion name="answers" />
                  )}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  type="submit">
                  Save
                </Button>
              </DialogActions>
            </form>
          );
        }}
      />{' '}
    </Dialog>
  );
};
