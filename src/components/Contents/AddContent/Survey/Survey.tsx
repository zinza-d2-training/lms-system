import AddIcon from '@mui/icons-material/Add';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import {
  Box,
  Button,
  Divider,
  Link,
  Typography,
  List,
  ListItem
} from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { makeValidate, TextField } from 'mui-rff';
import { useSnackbar } from 'notistack';
import React, { useMemo, useState } from 'react';
import { Form } from 'react-final-form';
import { Link as RouterLink, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import {
  createContent,
  updateContent
} from '../../../../services/ContentService';
import { ContentType } from '../../../../types/contents';
import { QuestionType } from '../../../../types/questions';
import TabPanel, { a11yProps } from '../../../Layout/Header/TabPanel';
import { QuestionDialogForm } from '../../../SelectQuestionButtonFinalForm/QuestionDialogForm';
import { useContentInfo } from '../../hook';
import { useQuestion } from './hook';
import SurveyOrderQuestion from './SurveyOrderQuestion';
import SurveyQuestionListFinalForm from './SurveyQuestionListFinalForm';

type ContentForm = {
  name: string;
  questions?: Array<number>;
};

const Survey = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [type, setType] = useState<QuestionType>(QuestionType.Multiple);
  const { id, contentId } = useParams() as { id: string; contentId: string };
  const { enqueueSnackbar } = useSnackbar();
  const { questions } = useQuestion();
  const { contentInfo } = useContentInfo(parseInt(id), parseInt(contentId));
  const initialValues = useMemo<ContentForm>(() => {
    return {
      name: contentInfo?.name || '',
      questions: contentInfo?.questions?.map((item) => item.id) || []
    };
  }, [contentInfo?.name, contentInfo?.questions]);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const schema: Yup.SchemaOf<ContentForm> = Yup.object().shape({
    name: Yup.string().max(80).required(),
    questions: Yup.array()
      .min(1, 'You must specify at least one possible question')
      .required()
  });

  const validate = makeValidate(schema);

  const handleSubmit = async (value: ContentForm) => {
    const newContent = {
      name: value.name,
      questions: value.questions,
      type: ContentType.Survey,
      courseId: parseInt(id)
    };
    try {
      if (id) {
        await updateContent(parseInt(id), parseInt(contentId), newContent);
      } else {
        await createContent(parseInt(id), newContent);
      }
    } catch (error) {
      enqueueSnackbar(String(error), {
        variant: 'error'
      });
    }
  };
  const handleOnclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpenPopup(true);
    setType(parseInt(e.currentTarget.value) as QuestionType);
  };
  return (
    <Box sx={{ padding: '5px' }}>
      <Form<ContentForm>
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validate={validate}
        render={({ handleSubmit, invalid, submitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  flexGrow: 1,
                  bgcolor: 'background.paper',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                <TextField
                  name="name"
                  type="text"
                  id="name"
                  size="small"
                  placeholder="Name Content "
                  sx={{ paddingLeft: '10px', width: '20%' }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}>
                  <Box
                    sx={{
                      flexBasis: '75%',
                      borderRight: '1px solid #ccc'
                    }}>
                    <TabPanel value={value} index={0} height="100%">
                      <SurveyQuestionListFinalForm
                        questions={questions}
                        name="questions"
                      />
                    </TabPanel>
                    <TabPanel value={value} index={1} height="100%">
                      <SurveyOrderQuestion
                        contentId={parseInt(contentId)}
                        questions={questions.filter((item) =>
                          (initialValues?.questions || []).includes(item.id)
                        )}
                      />
                    </TabPanel>
                  </Box>

                  <Box
                    sx={{
                      flexBasis: '25%',
                      justifyContent: 'start'
                    }}
                    className="menu-right">
                    <Tabs
                      orientation="vertical"
                      value={value}
                      onChange={handleChange}>
                      <Tab
                        icon={
                          <CheckBoxIcon
                            fontSize="large"
                            sx={{
                              padding: '5px',
                              boxSizing: 'unset',
                              borderRadius: '50%',
                              backgroundColor: '#DADADA'
                            }}
                          />
                        }
                        iconPosition="start"
                        label="SELECT QUESTIONS"
                        {...a11yProps(0)}
                        sx={{ justifyContent: 'left' }}
                      />
                      <Tab
                        icon={
                          <ImportExportIcon
                            fontSize="large"
                            sx={{
                              padding: '5px',
                              boxSizing: 'unset',
                              borderRadius: '50%',
                              backgroundColor: '#DADADA'
                            }}
                          />
                        }
                        iconPosition="start"
                        label="SET QUESTION ORDER"
                        {...a11yProps(1)}
                        sx={{ justifyContent: 'left' }}
                      />
                    </Tabs>
                    <Divider />
                    <Box
                      sx={{
                        display: 'flex',
                        padding: '20px'
                      }}>
                      <Box>
                        <AddIcon
                          fontSize="large"
                          sx={{
                            padding: '5px',
                            boxSizing: 'unset',
                            borderRadius: '50%',
                            backgroundColor: '#DADADA'
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          paddingLeft: '10px'
                        }}>
                        <Typography>Add question</Typography>
                        <List>
                          <ListItem disablePadding>
                            <Typography variant="caption">
                              <Button
                                size="small"
                                onClick={handleOnclick}
                                value="1">
                                Multiple
                              </Button>
                            </Typography>
                          </ListItem>
                          <ListItem disablePadding>
                            <Typography variant="caption">
                              <Button
                                size="small"
                                onClick={handleOnclick}
                                value="2">
                                Text
                              </Button>
                            </Typography>
                          </ListItem>
                          <ListItem disablePadding>
                            <Typography variant="caption">
                              <Button
                                size="small"
                                onClick={handleOnclick}
                                value="3">
                                Single
                              </Button>
                            </Typography>
                          </ListItem>
                        </List>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  margin: '0 0 20px 20px',
                  alignItems: 'center'
                }}>
                <Button
                  disabled={invalid || submitting}
                  type="submit"
                  size="small"
                  variant="contained"
                  sx={{ marginRight: '20px', backgroundColor: '#000FE6' }}>
                  Save
                </Button>
                <Link
                  component={RouterLink}
                  to={`/courses/${id}`}
                  underline="hover"
                  color="inherit">
                  <Typography variant="caption">cancel</Typography>
                </Link>
              </Box>
            </form>
          );
        }}
      />
      {openPopup && (
        <QuestionDialogForm
          type={type}
          forSurvey
          onCreated={(qId) => qId}
          handleClose={() => setOpenPopup(false)}
        />
      )}
    </Box>
  );
};

export default Survey;
