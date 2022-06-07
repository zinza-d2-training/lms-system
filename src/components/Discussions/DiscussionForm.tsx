import { makeValidate, TextField } from 'mui-rff';
import React, { useMemo } from 'react';
import { Form } from 'react-final-form';
import * as Yup from 'yup';
import { DiscussionForm } from '../../types/discussions';
import { useDiscussionInfo } from './hook';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  DialogContentText,
  Button,
  DialogActions
} from '@mui/material';

import './style.css';
import { EditorField } from '../Contents/Editor/EditorField';
import { createDiscussion } from '../../services/DiscussionService';

interface Props {
  label: string;
  id?: number;
  handleClose: () => void;
}

const AddDiscussion = ({ label, id, handleClose }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = React.useState(false);

  const { discussion } = useDiscussionInfo(id);

  const initialValues = useMemo<DiscussionForm>(() => {
    return {
      topic: discussion?.topic || '',
      message: discussion?.message || ''
    };
  }, [discussion?.message, discussion?.topic]);

  const schema: Yup.SchemaOf<DiscussionForm> = Yup.object().shape({
    topic: Yup.string().max(255).required(),
    message: Yup.string().required()
  });

  const validate = makeValidate(schema);

  const handleSubmit = (value: DiscussionForm) => {
    const formData = new FormData();
    formData.append('topic', value.topic);
    formData.append('description', value.message);
    // console.log(value);

    createDiscussion(formData);
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
      <DialogTitle>{label}</DialogTitle>
      <Form<DiscussionForm>
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
                      name="topic"
                      fullWidth
                      id="topic"
                      type="text"
                      size="small"
                      placeholder="topic"
                      sx={{ marginBottom: '20px' }}
                    />
                  </Box>
                  <Box>
                    <EditorField name="message" />
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

export default AddDiscussion;
