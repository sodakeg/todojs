import { React } from 'react';
import {
  Button, Dialog, DialogTitle, DialogActions, TextField, Stack,
} from '@mui/material';
import PropTypes from 'prop-types';

function TodoFormDialog(props) {
  const {
    open, handleAccept, handleCancel, heading, handleUpdate, title, description,
  } = props;

  return (
    <Dialog open={open} onClose={handleCancel} fullWidth>

      <DialogTitle>{heading}</DialogTitle>
      <Stack spacing={2} direction="column" sx={{ mx: 'auto', width: '95%' }}>
        <TextField
          autoFocus
          id="title"
          label="Title"
          defaultValue={title}
          variant="standard"
          onChange={(e) => handleUpdate({ title: e.target.value })}
        />

        <TextField
          multiline
          minRows={3}
          maxRows={8}
          id="description"
          label="Description"
          defaultValue={description}
          variant="outlined"
          onChange={(e) => handleUpdate({ description: e.target.value })}
        />
      </Stack>

      <DialogActions>

        <Button onClick={handleCancel}>Cancel</Button>

        <Button onClick={handleAccept}>Accept</Button>

      </DialogActions>
    </Dialog>
  );
}

TodoFormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleAccept: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

TodoFormDialog.defaultProps = {
  title: '',
  description: '',
};

export default TodoFormDialog;
