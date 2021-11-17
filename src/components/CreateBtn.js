import * as React from 'react';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const StyledFab = styled(Fab)({
  position: 'fixed',
  zIndex: 1,
  bottom: 30,
  right: 30,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const CreateBtn = () => (
  <>
    <Link to={{ pathname: '/newtask' }}>
      <StyledFab size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </StyledFab>
    </Link>
  </>
);

export default CreateBtn;
