import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography
} from '@mui/material';
import { makeValidate, TextField } from 'mui-rff';
import React from 'react';
import { Form } from 'react-final-form';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { ImageField } from '../common/ImageField';
import { useCourseData } from './hook';
interface AddCourseFormData {
  name?: string | null;
  description?: string | null;
  image?: string | null;
}

const schema: Yup.SchemaOf<AddCourseFormData> = Yup.object().shape({
  name: Yup.string().min(10).max(100).required(),
  description: Yup.string().max(1000).required(),
  image: Yup.mixed().notRequired()
});

const validate = makeValidate<AddCourseFormData>(schema);

const AddCourses = () => {
  const handleSubmit = () => {};

  const { id: courseId } = useParams() as { id: string };
  const id =
    courseId && !isNaN(parseInt(courseId)) ? parseInt(courseId) : undefined;

  const { courseInfo: initialValues, loading } = useCourseData(id);

  return loading ? (
    <>Loading...</>
  ) : (
    <Box
      sx={{
        margin: '5px',
        padding: '0'
      }}>
      <Box component="form">
        <Form<AddCourseFormData>
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validate={validate}
          render={({ handleSubmit, invalid, initialValues }) => {
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
                          name="name"
                          type="text"
                          id="name"
                          autoComplete="name"
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
                    <ImageField
                      name="image"
                      // initPreview={initialValues.image}
                    />
                  </Box>
                </Box>
                <Button
                  disabled={invalid}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    height: '38px',
                    backgroundColor: '#000FE6',
                    width: '20%',
                    marginLeft: '175px'
                  }}>
                  save
                </Button>
              </form>
            );
          }}
        />
      </Box>
    </Box>
  );
};

export default AddCourses;
