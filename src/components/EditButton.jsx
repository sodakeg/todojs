import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

function EditButton({ id, handleDispatch }) {
  // TODO: to be implemented
  const editAction = () => {
    console.log(`Edit Todo ${id}`);
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={editAction}
    >
      Edit
    </Button>
  );
}

EditButton.propTypes = {
  id: PropTypes.number.isRequired,
  handleDispatch: PropTypes.func.isRequired,
};

export default EditButton;
