import { Container, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Styles from './Styles';

const Buy = () => {
    const classes = Styles()
  return (
      <Container component="main" maxWidth="sm">
          <Paper className={classes.paper} >
              <Typography variant="h6" color="primary" >Successfuly you buy the product</Typography>
          </Paper>
      </Container>
  )
};

export default Buy;
