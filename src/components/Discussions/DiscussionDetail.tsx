import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { CustomizedMenus } from '../Courses/ListCourses/MenuActions';
import { useDiscussionInfo } from './hook';
import './style.css';

const DiscussionDetail = () => {
  return <>123</>;
  // const { discussionId } = useParams() as { discussionId: string };
  // const { discussion } = useDiscussionInfo(parseInt(discussionId));
  // const [openPopup, setOpenPopup] = useState(false);
  // const [id, setId] = useState<number>();
  // const handleOnclick = (id?: number) => {
  //   setOpenPopup(true);
  //   setId(id);
  // };
  // return (
  //   <>
  //     <Box className="discussion-item">
  //       <Box className="discussion-item-image">
  //         <img
  //           src="https://secure.gravatar.com/avatar/5159d38d3580b9c31dc32f971c079d08?size=80&amp;rating=g&amp;d=https%3A%2F%2Fdinhlinh.talentlms.com%2Fpages%2Fimages%2Fdefault_user2x.png"
  //           alt={''}
  //           loading="lazy"
  //           className="item-image"
  //         />
  //       </Box>
  //       <Box className="discussion-item-content">
  //         <Box className="discussion-item-content_left">
  //           <Typography>{discussion?.topic}</Typography>
  //         </Box>
  //         <Box className="discussion-item-content_right">
  //           <CustomizedMenus
  //             items={[
  //               {
  //                 to: `#`,
  //                 label: 'Edit',
  //                 icon: <ModeEditOutlinedIcon />,
  //                 onClick: () => handleOnclick(discussion?.id)
  //               },
  //               {
  //                 to: `#`,
  //                 label: 'Delete',
  //                 icon: <ClearOutlinedIcon />
  //               }
  //             ]}
  //           />
  //         </Box>
  //       </Box>
  //     </Box>
  //   </>
  // );
};

export default DiscussionDetail;
