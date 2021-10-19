import PropTypes from 'prop-types';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Task = ({ taskName }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      action={(
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
        )}
      title={taskName}
      subheader="September 14, 2016"
    />
    {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
  </Card>
);
export default Task;

Task.propTypes = {
  taskName: PropTypes.string.isRequired,
  // expand: PropTypes.bool.isRequired,
};
