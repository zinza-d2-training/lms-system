import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Typography
} from '@mui/material';
import { pick } from 'lodash';
import { makeValidate, TextField } from 'mui-rff';
import React, { useState } from 'react';
import { Form } from 'react-final-form';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import { createCourse } from '../../services/CourseService';
import { ImageField } from '../common/ImageField';
import SnackBar from '../common/SnackBar';

interface CourseFormData {
  title: string;
  imageURL: string;
  description: string;
}

const schema: Yup.SchemaOf<CourseFormData> = Yup.object().shape({
  title: Yup.string().min(10).max(100).required(),
  description: Yup.string().max(1000).required(),
  imageURL: Yup.mixed().notRequired()
});

const validate = makeValidate(schema);

const AddCourses = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (courseForm: CourseFormData) => {
    const courseCreate = pick(courseForm, 'title', 'imageURL', 'description');

    try {
      await createCourse(courseCreate);
      setMessage('success!');
      setSuccess(true);
      setOpen(true);
    } catch (error) {
      setOpen(true);
      setMessage('Something went wrong');
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      sx={{
        margin: '5px',
        padding: '0'
      }}>
      <SnackBar
        open={open}
        autoHide={2000}
        message={message}
        onClose={handleClose}
        severity={success ? 'success' : 'error'}
      />
      <Box component="form">
        <Form<CourseFormData>
          onSubmit={handleSubmit}
          initialValues={{ imageURL: '' }}
          validate={validate}
          render={({ handleSubmit, invalid, submitting }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    display: 'flex',
                    borderBottom: '2px solid #eaeaea'
                  }}>
                  <Box
                    sx={{
                      flex: 3
                    }}>
                    <Box
                      sx={{
                        display: 'flex',
                        margin: '10px'
                      }}>
                      <Typography
                        sx={{
                          width: '150px',
                          alignItems: 'center',
                          justifyItems: 'center',
                          marginRight: '50px',
                          padding: '5px'
                        }}>
                        Course name
                      </Typography>
                      <Box
                        sx={{
                          width: '30%'
                        }}>
                        <TextField
                          required
                          name="title"
                          type="text"
                          id="title"
                          autoComplete="title"
                          size="small"
                          placeholder="e.g. Introduction"
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        margin: '10px'
                      }}>
                      <Typography
                        sx={{
                          width: '150px',
                          alignItems: 'center',
                          justifyItems: 'center',
                          marginRight: '50px',
                          padding: '5px'
                        }}>
                        Description
                      </Typography>
                      <Box
                        sx={{
                          width: '70%'
                        }}>
                        <TextField
                          required
                          name="description"
                          type="text"
                          id="description"
                          autoComplete="description"
                          placeholder="Add a course description"
                          fullWidth
                          multiline
                          rows={5}
                        />

                        <FormControlLabel
                          control={<Checkbox value="active" color="primary" />}
                          label="Active"
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      flex: 1,
                      textAlign: 'center'
                    }}>
                    <ImageField name="imageURL" />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center'
                  }}>
                  <Button
                    disabled={invalid || submitting}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      height: '38px',
                      backgroundColor: '#000FE6',
                      width: '15%',
                      marginLeft: '210px'
                    }}>
                    Create
                  </Button>
                  <Link
                    component={RouterLink}
                    underline="hover"
                    to="/courses"
                    sx={{
                      marginLeft: '15px'
                    }}>
                    <Typography>Cancel</Typography>
                  </Link>
                </Box>
              </form>
            );
          }}
        />
      </Box>
    </Box>
  );
};

export default AddCourses;
