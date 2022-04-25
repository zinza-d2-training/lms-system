import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { TenplateDialog } from './TenplateDialog';
const classes = {};
 const DialogBoxContents = () => {
  
  const [open, setOpen] = useState(false);

  const handleClose = () =>{
    setOpen(false)
  }

  
  return (
    <>
      <div>
        <TenplateDialog
          items={[
            {
              answer: [<TextField />],
              label: 'input',
              open: open,
              handleClose: handleClose
            }
          ]}
        />
      </div>
    </>
  );
};
