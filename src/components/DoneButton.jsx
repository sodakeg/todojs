import React from 'react';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

function DoneButton({ id, done, handleDispatch }) {
  const toggleAction = () => {
    console.log(`Toggle Todo ${id}`);
    handleDispatch({
      type: 'EDIT',
      payload: { id, done: !done, updatedAt: window.Date.now() },
    });
  };

  return (
    <IconButton
      variant="contained"
      color="success"
      onClick={toggleAction}
    >
      {done ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankOutlinedIcon />}
    </IconButton>
  );
}

DoneButton.propTypes = {
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  handleDispatch: PropTypes.func.isRequired,
};

export default DoneButton;
