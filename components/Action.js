import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
   padding: '60px 0px 47px',
   background: '#424242',
   color: 'white'
  },
  buttonCoztumize: {
    '& > *': {
      margin: theme.spacing(1),
      color: '#90caf9',
      border: '1px solid rgba(144, 202, 249, 0.5)',
      marginTop: '1em',
      width: '40%',
      '&:hover': {
        backgroundColor: '#90caf9',
        color: 'black'
      }
    },
  },
}));


export default function Action() {
  const classes = useStyles()
  return (
    <div className={classes.root} align='center'>
      <div>
      <Container maxWidth="sm">
        <Typography variant="h2" component="div">
          Album Layout
        </Typography>
        <Typography variant="h5" style={{marginTop: '1em'}}>
        Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
        </Typography>
        <div className={classes.buttonCoztumize}>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined">Default</Button>
        </div>
      </Container>
      </div>
    </div>
  )
}