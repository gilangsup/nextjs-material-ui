import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#424242',
    textAlign: 'center',
    padding: '48px'
  },
}));


export default function Footer() {
  const classes = useStyles()
  return (
      <AppBar position="static" className={classes.root}>
        <Container maxWidth="md">
            <Typography variant="h6" color="inherit">
              Footer
            </Typography>
            <Typography variant="subtitle1" style={{color: '#C3C3B8'}}>
            Something here to give the footer a purpose!
Copyright © Your Website 2021.
            </Typography>
        </Container>
        </AppBar>
  )
}