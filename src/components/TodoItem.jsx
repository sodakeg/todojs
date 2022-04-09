import { React, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Grid, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

function TodoItem({
  id, title, description, done, updatedAt, handleDispatch,
}) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Accordion
      expanded={expanded}
      sx={{
        width: '100%', alignSelf: 'center', ':hover': { boxShadow: 3 },
      }}
      onChange={() => setExpanded(!expanded)}
    >
      {/* strikeout entries marked as done */}

      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Grid container direction="row" justifyContent="space-around" alignItems="baseline">
          <Grid item xs="3">
            <Box sx={{ textDecoration: done ? 'line-through' : 'none' }}>
              <Typography variant="h5" component="div" width="90%" flexShrink={0}>
                {title}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Typography color="text.secondary" sx={{ textAlign: 'right' }} gutterBottom>
              {updatedAt}
            </Typography>
          </Grid>

        </Grid>
      </AccordionSummary>

      <AccordionDetails>
        <Box sx={{ textDecoration: done ? 'line-through' : 'none' }}>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </Box>
      </AccordionDetails>

      <AccordionActions>
        <EditButton
          id={id}
          title={title}
          description={description}
          handleDispatch={handleDispatch}
        />
        <DeleteButton id={id} handleDispatch={handleDispatch} />
      </AccordionActions>
    </Accordion>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  updatedAt: PropTypes.string.isRequired,
  handleDispatch: PropTypes.func.isRequired,
};

export default TodoItem;
