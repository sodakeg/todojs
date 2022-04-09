import { React, useState } from 'react';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import AddIcon from '@mui/icons-material/Add';
import TodoFormDialog from './TodoFormDialog';

function AddButton(props) {
  const { handleDispatch } = props;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addAction = () => {
    const id = window.Date.now();
    console.log(`Add Todo ${id}`);
    handleDispatch({
      type: 'ADD',
      payload: {
        id,
        title,
        description,
        done: false,
        updatedAt: id,
      },
    });

    // clear form
    setTitle('');
    setDescription('');
  };

  const handleFormUpdate = (params) => {
    if (params.title) setTitle(params.title);
    if (params.description) setDescription(params.description);
  };

  const [openDialog, setOpenDialog] = useState(false);

  const handleCancel = () => {
    setOpenDialog(false);
  };

  const handleAccept = () => {
    addAction();
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  return (
    <>
      { openDialog ? (
        <TodoFormDialog
          open={openDialog}
          handleCancel={handleCancel}
          handleAccept={handleAccept}
          handleUpdate={handleFormUpdate}
          heading="Add Todo"
          title={title}
          description={description}
        />
      ) : null }

      <IconButton
        variant="contained"
        color="success"
        onClick={handleOpenDialog}
      >
        <AddIcon />
      </IconButton>
    </>
  );
}

AddButton.propTypes = {
  handleDispatch: PropTypes.func.isRequired,
};

export default AddButton;
