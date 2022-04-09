import { React, useState } from 'react';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import ConfirmationDialog from './ConfirmationDialog';

function ClearButton(props) {
  const { handleDispatch } = props;
  const clearAction = () => {
    console.log('Clear todos');
    handleDispatch({
      type: 'CLEAR',
    });
  };

  const [openDialog, setOpenDialog] = useState(false);

  const handleCancel = () => {
    setOpenDialog(false);
  };

  const handleAccept = () => {
    clearAction();
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  return (
    <>
      { openDialog ? (
        <ConfirmationDialog
          open={openDialog}
          handleCancel={handleCancel}
          handleAccept={handleAccept}
          title="Clear Todos"
          message="Are you sure you want to clear all todos?"
        />
      ) : null }

      <IconButton
        variant="contained"
        color="error"
        onClick={handleOpenDialog}
      >
        <ClearAllIcon />
      </IconButton>
    </>
  );
}

ClearButton.propTypes = {
  handleDispatch: PropTypes.func.isRequired,
};

export default ClearButton;
