import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  DialogContentText,
  Button,
  DialogActions
} from '@mui/material';
import { makeValidate, TextField } from 'mui-rff';
import React, { useMemo } from 'react';
import { Form } from 'react-final-form';
import * as Yup from 'yup';
import { CommentFormInfo } from '../../types/discussions';
import { useCommentInfo } from './hook';

interface Props {
  id?: number;
  handleClose: () => void;
}

const CommentForm = ({ id, handleClose }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = React.useState(false);

  const { commentInfo } = useCommentInfo(id);

  const initialValues = useMemo<CommentFormInfo>(() => {
    return {
      comment: commentInfo?.comment || ''
    };
  }, [commentInfo?.comment]);

  const schema: Yup.SchemaOf<CommentFormInfo> = Yup.object().shape({
    comment: Yup.string().required()
  });

  const validate = makeValidate(schema);

  const handleSubmit = (value: CommentFormInfo) => {
    console.log('discussion', value);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Dialog open className="Container-dialog-question">
      <DialogTitle>Edit comment</DialogTitle>
      <Form<CommentFormInfo>
        validate={validate}
        onSubmit={handleSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => {
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
                    <TextField
                      name="comment"
                      fullWidth
                      id="comment"
                      type="text"
                      size="small"
                      placeholder="comment"
                      sx={{ marginBottom: '20px' }}
                    />
                  </Box>
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
      />
    </Dialog>
  );
};

export default CommentForm;
