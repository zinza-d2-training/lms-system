import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Link,
  List,
  ListItem,
  Typography
} from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ContentIconsByType } from '../common/IconsType';
import { useContentData, useCourseData } from './hook';

interface Props {
  id?: number;
  handleClose: () => void;
}

const CourseInfoDialog = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = React.useState(false);
  const { courseInfo } = useCourseData(props.id);
  const { contentData } = useContentData(props.id);
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
    <Dialog open scroll="paper" className="Container-dialog-question">
      <DialogTitle id="scroll-dialog-title">CourseInfo:</DialogTitle>
      <DialogContent dividers>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ flex: 1, marginRight: '4px' }}>
              <img
                style={{
                  width: '150px',
                  height: 'auto',
                  objectFit: 'cover',
                  left: 0,
                  right: 0,
                  borderRadius: '5px'
                }}
                src={courseInfo?.image}
                alt="anh"
              />
            </Box>
            <Box sx={{ flex: 3 }}>
              <Box>
                <Typography variant="h5">{courseInfo?.title}</Typography>
              </Box>
              <Box>{courseInfo?.description}</Box>
            </Box>
          </Box>
          <Divider />
          <Box>
            <Box>
              <Typography variant="h6">Content</Typography>
            </Box>
            <Box>
              <List disablePadding>
                {contentData.map((item) => (
                  <ListItem
                    key={item.id}
                    sx={{
                      '&:hover .ContentList-Option': {
                        opacity: 1
                      }
                    }}>
                    <ContentIconsByType type={item.type} />
                    <Link
                      component={RouterLink}
                      to={`/view/${props.id}/content/${item.id}`}
                      underline="hover"
                      color="inherit">
                      <Typography>{item.name}</Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CourseInfoDialog;
