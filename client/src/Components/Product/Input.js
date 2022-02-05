import { Grid, TextField } from '@material-ui/core';
import React from 'react';

const Input = ({name,label,handleChange}) => {
  return (
      <Grid item xs={12} sm={12} height="20px" >
          <TextField 
            name={name}
            label={label}
            variant="standard"
            onChange={handleChange}
            fullWidth
          />
      </Grid>
  )
};

export default Input;
