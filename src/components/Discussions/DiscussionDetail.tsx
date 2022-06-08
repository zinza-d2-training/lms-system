import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { Box, Button, Typography } from '@mui/material';
import { makeValidate, TextField } from 'mui-rff';
import React, { useState } from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { CommentFormInfo } from '../../types/discussions';
import { CustomizedMenus } from '../Courses/ListCourses/MenuActions';
import CommentForm from './CommentForm';
import DiscussionForm from './DiscussionForm';
import { useComment, useDiscussionInfo } from './hook';
import './style.css';

const DiscussionDetail = () => {
  const { discussionId } = useParams() as { discussionId: string };
  const { discussion } = useDiscussionInfo(parseInt(discussionId));

  console.log('log : ', discussion);

  const { comments } = useComment(parseInt(discussionId));
  const [openPopup, setOpenPopup] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const [discussId, setDiscussId] = useState<number>();
  const [cmtId, setCmtId] = useState<number>();
  const handleOnclick = (id?: number) => {
    setOpenPopup(true);
    setDiscussId(id);
  };

  const schema: Yup.SchemaOf<CommentFormInfo> = Yup.object().shape({
    comment: Yup.string().required()
  });

  const validate = makeValidate(schema);

  const handleSubmit = (value: CommentFormInfo) => {
    console.log('comment', value);
  };
  return (
    <>
      <Box sx={{ margin: '8px', padding: '5px' }}>
        <Box
          className="discussion-item"
          sx={{
            marginBottom: '8px',
            border: '1px solid #CCE8F3',
            borderRadius: '5px'
          }}>
          <Box className="discussion-item-image">
            <img
              src="https://secure.gravatar.com/avatar/5159d38d3580b9c31dc32f971c079d08?size=80&amp;rating=g&amp;d=https%3A%2F%2Fdinhlinh.talentlms.com%2Fpages%2Fimages%2Fdefault_user2x.png"
              alt={''}
              loading="lazy"
              className="item-image"
            />
          </Box>
          <Box className="discussion-item-content">
            <Box className="discussion-item-content_left">
              <Typography>{discussion?.topic}</Typography>
            </Box>
            <Box className="discussion-item-content_right">
              <CustomizedMenus
                items={[
                  {
                    to: `#`,
                    label: 'Edit',
                    icon: <ModeEditOutlinedIcon />,
                    onClick: () => handleOnclick(discussion?.id)
                  },
                  {
                    to: `#`,
                    label: 'Delete',
                    icon: <ClearOutlinedIcon />
                  }
                ]}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginLeft: '30px' }}>
          {comments &&
            comments.map((comment) => (
              <Box
                className="discussion-item"
                key={comment.id}
                sx={{
                  marginTop: '8px',
                  border: '1px solid #CCE8F3',
                  borderRadius: '5px'
                }}>
                <Box className="discussion-item-image">
                  <img
                    src="https://secure.gravatar.com/avatar/5159d38d3580b9c31dc32f971c079d08?size=80&amp;rating=g&amp;d=https%3A%2F%2Fdinhlinh.talentlms.com%2Fpages%2Fimages%2Fdefault_user2x.png"
                    alt={''}
                    loading="lazy"
                    className="item-image"
                  />
                </Box>
                <Box className="discussion-item-content">
                  <Box className="discussion-item-content_left">
                    <Typography>{comment.comment}</Typography>
                  </Box>
                  <Box className="discussion-item-content_right">
                    <CustomizedMenus
                      items={[
                        {
                          to: `#`,
                          label: 'Edit',
                          icon: <ModeEditOutlinedIcon />,
                          onClick: () => {
                            setOpenComment(true);
                            setCmtId(comment.id);
                          }
                        },
                        {
                          to: `#`,
                          label: 'Delete',
                          icon: <ClearOutlinedIcon />
                        }
                      ]}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
        </Box>
        <Form<CommentFormInfo>
          validate={validate}
          onSubmit={handleSubmit}
          initialValues={{
            comment: ''
          }}
          render={({ handleSubmit }) => {
            return (
              <form
                onSubmit={handleSubmit}
                style={{
                  marginTop: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  overflowY: 'auto'
                }}>
                <Box>
                  <TextField
                    name="comment"
                    id="comment"
                    type="text"
                    size="small"
                    multiline
                    placeholder="comment"
                    sx={{ marginBottom: '20px' }}
                  />
                </Box>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ width: '50px' }}>
                  Save
                </Button>
              </form>
            );
          }}
        />
      </Box>
      {openPopup && (
        <DiscussionForm
          label={'Edit discussion'}
          id={discussId}
          handleClose={() => setOpenPopup(false)}
        />
      )}
      {openComment && (
        <CommentForm id={cmtId} handleClose={() => setOpenComment(false)} />
      )}
    </>
  );
};

export default DiscussionDetail;
