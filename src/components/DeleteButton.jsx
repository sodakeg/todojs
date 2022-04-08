import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

function DeleteButton({ id }) {
  // TODO: to be implemented
  const removeAction = () => {
    console.log(`Remove Todo ${id}`);
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
};

export default DeleteButton;
