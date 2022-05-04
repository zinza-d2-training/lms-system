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
import * as Yup from 'yup';
import { QuestionForm, QuestionType } from '../../types/questions';
import { useQuestionInfo } from '../Contents/AddContent/Survey/hook';
import { EditorField } from '../Contents/Editor/EditorField';
import AnswerFinalFormField from './AnswerFinalFormField';
import CreateFreeTextQuestion from './CreateFreeTextQuestion';

export interface Props {
  type: QuestionType;
  id: number;
  onCreated: (id: number) => void;
  handleClose: () => void;
}

export const CreateQuestionDialog = (props: Props) => {
  const { questionInfo } = useQuestionInfo(props.id);

  const initialValues = React.useMemo<QuestionForm>(() => {
    return {
      text: questionInfo?.text || '',
      answers: (questionInfo?.answers || []).map((item) => item)
    };
  }, [questionInfo?.answers, questionInfo?.text]);

  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const type = questionInfo?.type || props.type;

  const schema: Yup.SchemaOf<QuestionForm> = Yup.object().shape({
    text: Yup.string()
      .max(80)
      .required('Error : Text content is a required field'),
    answers: Yup.array().min(
      type === QuestionType.Raw ? 0 : 1,
      'You must specify at least one possible question'
    )
  });
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const validate = makeValidate(schema);

  const handleSubmit = (value: QuestionForm) => {
    setOpen(false);
    console.log('', value);
  };
  return (
    <Dialog className="Container-dialog-question" open scroll={scroll}>
      <DialogTitle id="scroll-dialog-title" sx={{ color: 'red' }}>
        Please write your question :
      </DialogTitle>
      <Form<QuestionForm>
        validate={validate}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => {
          return (
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto'
              }}>
              <DialogContent dividers={scroll === 'paper'}>
                <DialogContentText
                  id="scroll-dialog-description"
                  ref={descriptionElementRef}
                  tabIndex={-1}>
                  <Box>
                    <EditorField name="text" />
                  </Box>

                  {props.type === QuestionType.Raw ? (
                    <CreateFreeTextQuestion />
                  ) : (
                    <AnswerFinalFormField name="answers" />
                  )}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
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
      />
    </Dialog>
  );
};
