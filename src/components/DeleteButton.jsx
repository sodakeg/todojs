import React from 'react';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteButton({ id, handleDispatch }) {
  const removeAction = () => {
    console.log(`Remove Todo ${id}`);
    handleDispatch({
      type: 'REMOVE',
      payload: id,
    });
  };

  return (
    <IconButton
      variant="contained"
      color="error"
      onClick={removeAction}
    >
      <DeleteIcon />
    </IconButton>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  handleDispatch: PropTypes.func.isRequired,
};

export default DeleteButton;
