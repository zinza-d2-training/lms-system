import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { FC } from 'react';
import { EditorField } from '../Editer/EditorField';

interface DiaglogItem {
  answer?: Array<React.ReactElement>;
  label: string;
  open: boolean;
  handleClose: () => void;
}

interface Props {
  items: DiaglogItem[];
}

export const TenplateDialog: FC<Props> = ({items}) => {
  return (
    <div>
      <EditorField name = "question"/>
      {items.map((item) => (
        <Dialog
          open={item.open}
          onClose={
            item.handleClose
          }
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">ログイン</DialogTitle>
          <DialogContent>
            <div>
              <TextField id="standard-basic" label="Answer1" fullWidth />
              <TextField id="standard-basic" label="Answer2" fullWidth />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={item.handleClose}>Save</Button>
          </DialogActions>
        </Dialog>
      ))}
    </div>
  );
};
