import React from 'react';
import { Button } from '@mui/material';

function EditButton({ id }) {
  // TODO: to be implemented
  const editAction = () => {
    console.log('Remove Todo');
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

export default EditButton;
