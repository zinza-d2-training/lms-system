import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { makeValidate } from 'mui-rff';
import * as React from 'react';
import { Form } from 'react-final-form';
import * as Yup from 'yup';
import { QuestionForm, QuestionType } from '../../types/questions';
import { useQuestionInfo } from '../Contents/AddContent/Survey/hook';
import { EditorField } from '../Contents/Editor/EditorField';
import AnswerFinalFormField from './AnswerFinalFormField';

export interface Props {
  type: QuestionType;
  id?: number;
  forSurvey?: boolean;
  onCreated: (id: number) => void;
  handleClose: () => void;
}

export const QuestionDialogForm = (props: Props) => {
  const { questionInfo } = useQuestionInfo(props.id);

  const initialValues = React.useMemo<QuestionForm>(() => {
    return {
      text: questionInfo?.text || '',
      answers: (questionInfo?.answers || []).map((item) => item)
    };
  }, [questionInfo?.answers, questionInfo?.text]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = React.useState(false);

  const type = questionInfo?.type || props.type;

  const schema: Yup.SchemaOf<QuestionForm> = Yup.object().shape({
    text: Yup.string()
      .max(80)
      .required('Error : Text content is a required field'),
    answers: Yup.array()
      .min(
        type === QuestionType.Raw ? 0 : 1,
        'Error : Need at least one valid field'
      )
      .test(
        'atleast-one-correct',
        'You must specify at least one correct answer',
        (value) => {
          if (type === QuestionType.Raw || props.forSurvey) return true;
          if (!value?.length) {
            return true;
          }
          return !!value?.some((item) => item.isCorrect);
        }
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
    // @TODO: create question and trigger onCreated
    console.log(value);
    props.onCreated(1);
    // handleClose();
  };
  return (
    <Dialog className="Container-dialog-question" open scroll="paper">
      <DialogTitle id="scroll-dialog-title" sx={{ color: 'red' }}>
        Please write your question :
      </DialogTitle>
      <Form<QuestionForm>
        validate={validate}
        onSubmit={handleSubmit}
        initialValues={initialValues}
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

                  {type !== QuestionType.Raw && (
                    <AnswerFinalFormField
                      name="answers"
                      type={type}
                      forSurvey={props.forSurvey}
                    />
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
