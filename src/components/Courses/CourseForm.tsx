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
import { useSnackbar } from 'notistack';
import React from 'react';
import { Form } from 'react-final-form';
import { Link as RouterLink, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { createCourse, updateCourse } from '../../services/CourseService';
import { CourseInfo } from '../../types/courses';
import { ImageField } from '../common/ImageField';
import { useCourseData } from './hook';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

// const validateImageType = (value) => {
//   if(value) {
//     let type = value.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0]
//     return SUPPORTED_FORMATS.includes(type)
//   }
// }

const schema: Yup.SchemaOf<CourseInfo> = Yup.object().shape({
  title: Yup.string().min(10).max(100).required(),
  description: Yup.string().max(1000).required(),
  image: Yup.mixed().test(
    'fileFormat',
    'Unsupported Format',
    (value) => value && SUPPORTED_FORMATS.includes(value.type)
  )
});

const validate = makeValidate(schema);

const CourseForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { id: courseId } = useParams() as { id: string };
  const id =
    courseId && !isNaN(parseInt(courseId)) ? parseInt(courseId) : undefined;
  const { courseInfo: initialValues, loading } = useCourseData(id);

  const handleSubmit = async (courseForm: CourseInfo) => {
    const courseInfo = pick(courseForm, 'title', 'image', 'description');
    // const getKeyValue =
    //   <T extends object, U extends keyof T>(key: U) =>
    //   (courseInfo: T) =>
    //     courseInfo[key];
    try {
      if (id) {
        await updateCourse(id, courseInfo);
      } else {
        const formData = new FormData();
        formData.append('title', courseInfo.title);
        formData.append('description', courseInfo.description);
        if (courseInfo.image) {
          formData.append('image', courseInfo.image);
        }
        await createCourse(formData);
      }
      enqueueSnackbar('Success!', {
        variant: 'success'
      });
    } catch (error) {
      enqueueSnackbar(String(error), {
        variant: 'error'
      });
    }
  };

  return loading ? (
    <>loading...</>
  ) : (
    <Box>
      <Box
        sx={{
          margin: '5px',
          padding: '0'
        }}>
        <Box component="form">
          <Form<CourseInfo>
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validate={validate}
            render={({ handleSubmit, invalid, initialValues, submitting }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Box
                    sx={{
                      display: 'flex',
                      borderBottom: '2px solid #eaeaea'
                    }}>
                    <Box
                      sx={{
                        marginTop: '20px',
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
                            control={
                              <Checkbox value="active" color="primary" />
                            }
                            label="Active"
                          />
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        marginTop: '20px',
                        flex: 1,
                        textAlign: 'center'
                      }}>
                      <ImageField
                        name="image"
                        initPreview={initialValues && initialValues.image}
                      />
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
                      {id ? 'Update' : 'Save'}
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
    </Box>
  );
};

export default CourseForm;
