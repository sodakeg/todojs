import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

function DeleteButton({ id, handleDispatch }) {
  const removeAction = () => {
    console.log(`Remove Todo ${id}`);
    handleDispatch({
      type: 'REMOVE',
      payload: id,
    });
  };

  return (
    <Button
      variant="contained"
      color="error"
      onClick={removeAction}
    >
      Delete
    </Button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  handleDispatch: PropTypes.func.isRequired,
};

export default DeleteButton;
