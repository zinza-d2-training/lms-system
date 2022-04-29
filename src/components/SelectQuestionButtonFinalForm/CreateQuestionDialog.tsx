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
  openPopup: boolean;
}

export const CreateQuestionDialog = (props: Props) => {
  const { questionInfo } = useQuestionInfo(props.id);

  const initialValues = React.useMemo<QuestionForm>(() => {
    return {
      text: questionInfo?.text || '',
      type: questionInfo?.type || QuestionType.Multiple,
      answers: (questionInfo?.answers || []).map((item) => item)
    };
  }, [questionInfo]);

  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const schema: Yup.SchemaOf<QuestionForm> = Yup.object().shape({
    text: Yup.string()
      .max(80)
      .required('Error : Text content is a required field'),
    type: Yup.mixed().oneOf([1, 2, 3]),
    answers: Yup.array()
      .min(1, 'You must specify at least one possible question')
      .default([])
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
  };
  return (
    <Dialog
      className="Container-dialog-question"
      open={props.openPopup}
      scroll={scroll}>
      <DialogTitle id="scroll-dialog-title" sx={{ color: 'red' }}>
        Please write your question :
      </DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        <Form<QuestionForm>
          validate={validate}
          initialValues={initialValues}
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
        />{' '}
      </DialogContent>
    </Dialog>
  );
};
