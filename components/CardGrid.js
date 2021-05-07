import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import MediaCard from './MediaCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '64px',
    paddingBottom: '64px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CardGrid() {
  const classes = useStyles()
  return (
    <div >
      <Container maxWidth="sm" className={classes.root}>
      <Grid container spacing={4}>
      <Grid item xs={6} sm={4}>
          <MediaCard className={classes.paper}>xs=6 sm=6</MediaCard>
        </Grid>
        <Grid item xs={6} sm={4}>
          <MediaCard className={classes.paper}>xs=6 sm=6</MediaCard>
        </Grid>
        <Grid item xs={6} sm={4}>
          <MediaCard className={classes.paper}>xs=6 sm=6</MediaCard>
        </Grid>
        <Grid item xs={6} sm={4}>
          <MediaCard className={classes.paper}>xs=6 sm=6</MediaCard>
        </Grid>
        <Grid item xs={6} sm={4}>
          <MediaCard className={classes.paper}>xs=6 sm=6</MediaCard>
        </Grid>
        <Grid item xs={6} sm={4}>
          <MediaCard className={classes.paper}>xs=6 sm=6</MediaCard>
        </Grid>
        <Grid item xs={6} sm={4}>
          <MediaCard className={classes.paper}>xs=6 sm=6</MediaCard>
        </Grid>
        <Grid item xs={6} sm={4}>
          <MediaCard className={classes.paper}>xs=6 sm=6</MediaCard>
        </Grid>
        <Grid item xs={6} sm={4}>
          <MediaCard className={classes.paper}>xs=6 sm=6</MediaCard>
        </Grid>
        </Grid>
        </Container>
    </div>
  )
}