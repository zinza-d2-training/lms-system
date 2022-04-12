import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface SnackBarProps {
  open: boolean;
  message: string;
  onClose: () => void;
  severity: AlertColor;
  autoHide: number;
}

const SnackBar = ({
  open,
  message,
  severity,
  autoHide,
  onClose
}: SnackBarProps) => {
  return (
    <Snackbar open={open} autoHideDuration={autoHide} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
