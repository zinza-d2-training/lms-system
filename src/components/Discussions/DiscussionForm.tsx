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
import {
  createDiscussion,
  updateDiscussion
} from '../../services/DiscussionService';
import { useParams } from 'react-router-dom';

interface Props {
  label: string;
  id?: number;
  handleClose: () => void;
}

const AddDiscussion = ({ label, id, handleClose }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { id: discussionId } = useParams() as { id: string };

  // const { courseInfo, loading } = useCourseData(id);

  // const { id } = useParams() as { id: string };

  const [open, setOpen] = React.useState(false);

  const { discussion } = useDiscussionInfo(id);

  const initialValues = useMemo<DiscussionForm>(() => {
    return {
      topic: discussion?.topic || '',
      description: discussion?.description || ''
    };
  }, [discussion?.description, discussion?.topic]);

  const schema: Yup.SchemaOf<DiscussionForm> = Yup.object().shape({
    topic: Yup.string().max(255).required(),
    description: Yup.string().required()
  });

  const validate = makeValidate(schema);

  const handleSubmit = async (value: DiscussionForm) => {
    // const formData = new FormData();
    // formData.append('topic', value.topic);
    // formData.append('description', value.description);
    // console.log(value);
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
