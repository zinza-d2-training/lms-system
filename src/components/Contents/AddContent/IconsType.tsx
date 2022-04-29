import React from 'react';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { QuestionType } from '../../../types/questions';

interface Props {
  type: QuestionType;
}

const IconsType = (props: Props) => {
  return (
    <>
      {(() => {
        switch (props.type) {
          case '2':
            return <EditOutlinedIcon fontSize='small' sx={{border: 'unset'}}/>;
          case '3':
            return <RadioButtonCheckedOutlinedIcon fontSize='small' sx={{border: 'unset'}}/>;
          default:
            return <CheckBoxOutlinedIcon fontSize='small' sx={{border: 'unset'}}/>;
        }
      })()}
    </>
  );
};

export default IconsType;
