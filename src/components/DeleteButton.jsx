import { React, useState } from 'react';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmationDialog from './ConfirmationDialog';

function DeleteButton({ id, handleDispatch }) {
  const removeAction = () => {
    console.log(`Remove Todo ${id}`);
    handleDispatch({
      type: 'REMOVE',
      payload: id,
    });
  };

  const [openDialog, setOpenDialog] = useState(false);

  const handleCancel = () => {
    setOpenDialog(false);
  };

  const handleAccept = () => {
    removeAction();
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
          title="Delete Todo"
          message={`Are you sure you want to delete Todo #${id}?`}
        />
      ) : null }

      <IconButton
        variant="contained"
        color="error"
        onClick={handleOpenDialog}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  handleDispatch: PropTypes.func.isRequired,
};

export default DeleteButton;
