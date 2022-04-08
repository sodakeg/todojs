import React from 'react';
import {
  Button, Dialog, DialogTitle, DialogContent, DialogActions,
} from '@mui/material';
import PropTypes from 'prop-types';

function ConfirmationDialog(props) {
  const {
    open, handleAccept, handleCancel, title, message,
  } = props;
  return (
    <Dialog open={open} onClose={handleCancel}>

      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{message}</DialogContent>

      <DialogActions>

        <Button onClick={handleCancel}>Cancel</Button>

        <Button onClick={handleAccept}>Accept</Button>

      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleAccept: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ConfirmationDialog;
