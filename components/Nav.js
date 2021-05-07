import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#90caf9'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  costumizeToolbar: {
    minHeight: '80px',
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.costumizeToolbar}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <PhotoAlbumIcon />
    </IconButton>
          <Typography variant="h6" color="inherit">
            Album Layout
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}