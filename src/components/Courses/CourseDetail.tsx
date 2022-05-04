import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HeightIcon from '@mui/icons-material/Height';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  MenuItem,
  Typography
} from '@mui/material';
import { sortBy } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { reorderCourseContents } from '../../services/ContentService';
import { ContentType } from '../../types/contents';
import { ContentIconsByType } from '../common/IconsType';
import CourseRightMenu from '../CourseRightMenu/CourseRightMenu';
import { useContentData, useCourseData } from './hook';
import { StyledMenu } from './StyledMenu';

const btnStyle = {
  backgroundColor: '#000FE3',
  marginRight: '5px'
};

const getItemStyle = (draggableStyle: any) => ({
  margin: '5px',
  padding: '5px',
  border: `2px solid #f3f3f3`,
  fontSize: `20px`,
  borderRadius: `5px`,

  ...draggableStyle
});

const CourseDetail = () => {
  const { id: courseId } = useParams() as { id: string };
  const id = parseInt(courseId);

  const { courseInfo } = useCourseData(id);
  const { contentData } = useContentData(id);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorOp, setAnchorOp] = useState<null | HTMLElement>(null);
  const [reorder, setReorder] = useState(false);
  const open = Boolean(anchorEl);
  const openOp = Boolean(anchorOp);
  const [todo, setTodo] = useState(contentData);
  const onDragEnd = async (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const items = Array.from(todo);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);

    const reOrderMapping: Record<number, number> = {};
    items.forEach((item, index) => {
      reOrderMapping[item.sequence] = index + 1;
    });
    const contents = await reorderCourseContents(id, reOrderMapping);
    setTodo(contents);
  };
  useEffect(() => {
    setTodo(contentData);
  }, [contentData]);

  const sortedContents = useMemo(() => {
    return sortBy(todo, 'sequence');
  }, [todo]);

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorOp(null);
  };

  const handleReorder = () => {
    setReorder(!reorder);
    setTodo(contentData);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Left content */}
      <Container sx={{ flex: 3, padding: '5px' }}>
        {/* Course Info */}
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ flex: 1 }}>
            <img
              style={{
                width: '150px',
                height: 'auto',
                objectFit: 'cover',
                left: 0,
                right: 0,
                borderRadius: '5px'
              }}
              src={courseInfo?.imageURL}
              alt="anh"
            />
          </Box>
          <Box sx={{ flex: 4 }}>
            <Box>
              <Typography variant="h5">{courseInfo?.title}</Typography>
            </Box>
            <Box>
              <Typography>{courseInfo?.description}</Typography>
            </Box>
          </Box>
        </Box>
        {/* Course Content */}
        <Box sx={{ marginTop: '10px' }}>
          <Box sx={{ display: 'flex' }}>
            <Box>
              <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setAnchorEl(event.currentTarget);
                }}
                size="small"
                endIcon={<KeyboardArrowDownIcon />}
                sx={btnStyle}>
                Add
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                <MenuItem onClick={handleClose} disableRipple>
                  <Link
                    component={RouterLink}
                    to={`/courses/${id}/contents/add/${ContentType.Basic}`}
                    underline="none"
                    color="inherit">
                    <ContentIconsByType type={ContentType.Basic} />
                    Content
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <Link
                    component={RouterLink}
                    to={`/courses/${id}/contents/add/${ContentType.Web}`}
                    underline="none"
                    color="inherit">
                    <ContentIconsByType type={ContentType.Web} />
                    Web content
                  </Link>
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                  <Link
                    component={RouterLink}
                    to={`/courses/${id}/contents/add/${ContentType.Video}`}
                    underline="none"
                    color="inherit">
                    <ContentIconsByType type={ContentType.Video} />
                    Video
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <Link
                    component={RouterLink}
                    to={`/courses/${id}/contents/add/${ContentType.Audio}`}
                    underline="none"
                    color="inherit">
                    <ContentIconsByType type={ContentType.Audio} />
                    Audio
                  </Link>
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                  <Link
                    component={RouterLink}
                    to={`/courses/${id}/contents/add/${ContentType.Iframe}`}
                    underline="none"
                    color="inherit">
                    <ContentIconsByType type={ContentType.Iframe} />
                    Iframe
                  </Link>
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                  <Link
                    component={RouterLink}
                    to={`/courses/${id}/contents/add/${ContentType.Survey}`}
                    underline="none"
                    color="inherit">
                    <ContentIconsByType type={ContentType.Survey} />
                    Survey
                  </Link>
                </MenuItem>
              </StyledMenu>
            </Box>
            <Box>
              <Button
                variant="contained"
                disableElevation
                size="small"
                startIcon={<HeightIcon />}
                onClick={handleReorder}
                sx={btnStyle}>
                Reorder
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                disableElevation
                size="small"
                sx={btnStyle}>
                <Link
                  component={RouterLink}
                  to={`/courses/${id}/edit`}
                  underline="none"
                  color="inherit">
                  Edit course
                </Link>
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                disableElevation
                size="small"
                sx={btnStyle}>
                View as learner
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                disableElevation
                size="small"
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setAnchorOp(event.currentTarget);
                }}
                sx={btnStyle}>
                <MoreHorizIcon />
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button'
                }}
                anchorEl={anchorOp}
                open={openOp}
                onClose={handleClose}>
                <MenuItem onClick={handleClose} disableRipple>
                  <EmailOutlinedIcon />
                  Message
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <CalendarMonthOutlinedIcon />
                  Add event
                </MenuItem>
              </StyledMenu>
            </Box>
          </Box>
          <Box>
            {reorder ? (
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="todo">
                  {(provided) => (
                    <div
                      className="todo"
                      {...provided.droppableProps}
                      ref={provided.innerRef}>
                      {sortedContents.map(({ sequence, name }, index) => {
                        return (
                          <Draggable
                            key={sequence}
                            draggableId={'' + sequence}
                            index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                  provided.draggableProps.style
                                )}>
                                <Typography>{name}</Typography>
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            ) : (
              sortedContents.map((item) => (
                <List>
                  <ListItem
                    disablePadding
                    sx={{
                      '&:hover .ContentList-Option': {
                        opacity: 1
                      }
                    }}>
                    <ContentIconsByType type={item.type} />
                    <Link
                      component={RouterLink}
                      to={`/courses/${id}/unit/view/${item.id}`}
                      underline="hover"
                      color="inherit">
                      <Typography>{item.name}</Typography>
                    </Link>
                    <List
                      disablePadding
                      className="ContentList-Option"
                      sx={{ display: 'flex', marginLeft: '20px', opacity: 0 }}>
                      <ListItem disablePadding sx={{ marginRight: '10px' }}>
                        <Link
                          component={RouterLink}
                          to={`/courses/${id}/contents/edit/${item.type}/${item.id}`}
                          underline="hover"
                          color="inherit">
                          <Typography variant="caption">edit</Typography>
                        </Link>
                      </ListItem>
                      <ListItem disablePadding>
                        <Link
                          component={RouterLink}
                          to={`/unit/:type/${item.id}`}
                          underline="hover"
                          color="inherit">
                          <Typography variant="caption">delete</Typography>
                        </Link>
                      </ListItem>
                    </List>
                  </ListItem>
                </List>
              ))
            )}
          </Box>
        </Box>
      </Container>
      {/* Right content */}
      <CourseRightMenu id={id} />
    </Box>
  );
};

export default CourseDetail;
