import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import GridOnIcon from '@mui/icons-material/GridOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HeightIcon from '@mui/icons-material/Height';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd';
import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useCourseData, useContentData } from './hook';
import { StyledMenu } from './StyledMenu';

const btnStyle = {
  backgroundColor: '#000FE3',
  marginRight: '5px'
};

const getItemStyle = (draggableStyle: any) => ({
  margin: '5px',
  padding: '5px',
  border: `1px solid black`,
  fontSize: `20px`,
  borderRadius: `5px`,

  ...draggableStyle
});

const CourseDetail = () => {
  const { id: courseId } = useParams() as { id: string };
  const id =
    courseId && !isNaN(parseInt(courseId)) ? parseInt(courseId) : undefined;

  const { courseInfo } = useCourseData(id);
  const { contentData } = useContentData(id);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorOp, setAnchorOp] = useState<null | HTMLElement>(null);
  const [reorder, setReorder] = useState(false);
  const open = Boolean(anchorEl);
  const openOp = Boolean(anchorOp);

  const [todo, setTodo] = useState(contentData)
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const items = Array.from(todo);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);

    setTodo(items);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorOp(null);
  };
  const handleReorder = () => {
    setReorder(!reorder);
    setTodo(contentData)
  };
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Left content */}
      <Container
        sx={{ flex: 3, borderRight: '1px solid #f3f3f3', padding: '5px' }}>
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
                  Content
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Web content
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                  Video
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Audio
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                  Iframe
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                  Survey
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
                  to={`/courses/edit/${id}`}
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
                  Message
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
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
                      {todo.map(({ sequence, name }, index) => {
                        return (
                          <Draggable key={sequence} draggableId={''+sequence} index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                  provided.draggableProps.style
                                )}>
                                {name}
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
              contentData.map((item) => (
                <List>
                  <ListItem disablePadding>{item.name}</ListItem>
                </List>
              ))
            )}
          </Box>
        </Box>
      </Container>
      {/* Right content */}
      <Box sx={{ flex: 1, padding: '5px' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius: '10px' }}>
              <GridOnIcon
                sx={{
                  marginRight: '5px',
                  padding: '5px',
                  borderRadius: '50%',
                  backgroundColor: '#DADADA'
                }}
                fontSize="large"
              />
              <Link
                component={RouterLink}
                to={`/courses/trainer/${id}`}
                underline="hover"
                color={'black'}>
                Content
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius: '10px' }}>
              <AccountCircleOutlinedIcon
                sx={{
                  marginRight: '5px',
                  padding: '5px',
                  borderRadius: '50%',
                  backgroundColor: '#DADADA'
                }}
                fontSize="large"
              />
              <Link
                component={RouterLink}
                to={'/trainer'}
                underline="hover"
                color={'black'}>
                User & Progress
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius: '10px' }}>
              <FolderOutlinedIcon
                sx={{
                  marginRight: '5px',
                  padding: '5px',
                  borderRadius: '50%',
                  backgroundColor: '#DADADA'
                }}
                fontSize="large"
              />
              <Link
                component={RouterLink}
                to={'/trainer'}
                underline="hover"
                color={'black'}>
                Files
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default CourseDetail;