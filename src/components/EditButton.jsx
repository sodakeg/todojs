import React from 'react';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';

function EditButton({ id, handleDispatch }) {
  // TODO: to be implemented
  const editAction = () => {
    console.log(`Edit Todo ${id}`);
  };

  return (
    <IconButton
      variant="contained"
      color="secondary"
      onClick={editAction}
    >
      <EditIcon />
    </IconButton>
  );
}

EditButton.propTypes = {
  id: PropTypes.number.isRequired,
  handleDispatch: PropTypes.func.isRequired,
};

export default EditButton;
