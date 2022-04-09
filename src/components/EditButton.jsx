import { React, useState } from 'react';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import TodoFormDialog from './TodoFormDialog';

function EditButton(props) {
  const {
    id, handleDispatch, title, description,
  } = props;

  const [_title, setTitle] = useState(title);
  const [_description, setDescription] = useState(description);

  const editAction = () => {
    console.log(`Edit Todo ${id}`);
    handleDispatch({
      type: 'EDIT',
      payload: {
        id,
        title: _title,
        description: _description,
        done: false,
        updatedAt: window.Date.now(),
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
    editAction();
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
          heading="Edit Todo"
          title={_title}
          description={_description}
        />
      ) : null }

      <IconButton
        variant="contained"
        color="warning"
        onClick={handleOpenDialog}
      >
        <EditIcon />
      </IconButton>
    </>
  );
}

EditButton.propTypes = {
  id: PropTypes.number.isRequired,
  handleDispatch: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EditButton;
