import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { makeValidate, TextField } from 'mui-rff';
import React, { useMemo } from 'react';
import { Form } from 'react-final-form';
import * as Yup from 'yup';
import {
  createDiscussion,
  updateDiscussion
} from '../../services/DiscussionService';
import { DiscussionForm } from '../../types/discussions';
import { EditorField } from '../Contents/Editor/EditorField';
import { useDiscussionInfo } from './hook';
import './style.css';

interface Props {
  label: string;
  id?: number;
  handleClose: () => void;
}

const AddDiscussion = ({ label, id, handleClose }: Props) => {
  const [open, setOpen] = React.useState(false);

  const { discussion } = useDiscussionInfo(id);

  const initialValues = useMemo<DiscussionForm>(() => {
    return {
      topic: discussion?.topic || '',
      description: discussion?.description || ''
    };
  }, [discussion?.description, discussion?.topic]);

  console.log(discussion);

  const schema: Yup.SchemaOf<DiscussionForm> = Yup.object().shape({
    topic: Yup.string().max(255).required(),
    description: Yup.string().required()
  });

  const validate = makeValidate(schema);

  const handleSubmit = async (value: DiscussionForm) => {
    if (id) {
      updateDiscussion(id, value);
    } else {
      createDiscussion(value);
    }
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
                    <EditorField name="description" />
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
