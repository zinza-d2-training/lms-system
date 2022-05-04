import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import CodeIcon from '@mui/icons-material/Code';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import React from 'react';
import { ContentType } from '../../types/contents';
import { QuestionType } from '../../types/questions';

export const QuestionIconsByType = (props: {
  type: QuestionType;
}) => {
  return (
    <>
      {(() => {
        switch (props.type) {
          case QuestionType.Raw:
            return (
              <EditOutlinedIcon fontSize="small" sx={{ border: 'unset', marginRight: '5px' }} />
            );
          case QuestionType.Single:
            return (
              <RadioButtonCheckedOutlinedIcon
                fontSize="small"
                sx={{ border: 'unset', marginRight: '5px' }}
              />
            );
          default:
            return (
              <CheckBoxOutlinedIcon fontSize="small" sx={{ border: 'unset', marginRight: '5px' }} />
            );
        }
      })()}
    </>
  );
};

export const ContentIconsByType = (props: {
  type: ContentType;
}) => {
  return (
    <>
      {(() => {
        switch (props.type) {

          case ContentType.Video:
            return (
              <PlayCircleFilledWhiteOutlinedIcon
                fontSize="small"
                sx={{ border: 'unset', marginRight: '5px' }}
              />
            );
          case ContentType.Basic:
            return (
              <ArticleOutlinedIcon fontSize="small" sx={{ border: 'unset', marginRight: '5px' }} />
            );
          case ContentType.Audio:
            return <VolumeUpIcon fontSize="small" sx={{ border: 'unset', marginRight: '5px' }} />;
          case ContentType.Survey:
            return (
              <CheckBoxOutlinedIcon fontSize="small" sx={{ border: 'unset', marginRight: '5px' }} />
            );
          case ContentType.Iframe:
            return <CodeIcon fontSize="small" sx={{ border: 'unset', marginRight: '5px' }} />;
          case ContentType.Web:
            return (
              <CloudOutlinedIcon fontSize="small" sx={{ border: 'unset', marginRight: '5px' }} />
            );
          default:
            return (
              <CheckBoxOutlinedIcon fontSize="small" sx={{ border: 'unset', marginRight: '5px' }} />
            );
        }
      })()}
    </>
  );
};
