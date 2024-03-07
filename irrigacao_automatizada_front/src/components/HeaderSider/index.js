import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import Home from '@material-ui/icons/Home';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import BuildIcon from '@material-ui/icons/Build';
import EcoIcon from '@material-ui/icons/Eco';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { home, about, monitoramento, sistema, plantas, sensor, solenoide } from '../../routes/paths';
import IsoIcon from '@mui/icons-material/Iso';
import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // background: '#006750',
    background: '#338573',

  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    // background: '#006750',
    background: '#338573',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const menuItens = [
  {
    text: 'Monitoriamento',
    icon: <PersonalVideoIcon style={{ color: '#ffff' }}/>,
    path: monitoramento
  },
  {
    text: 'Sensor',
    icon: <IsoIcon style={{ color: '#ffff' }}/>,
    path: sensor
  },
  {
    text: 'Solenóide',
    icon: <InvertColorsOffIcon style={{ color: '#ffff' }}/>,
    path: solenoide
  },
  {
    text: 'Sistema',
    icon: <BuildIcon style={{ color: '#ffff' }} />,
    path: sistema
  },
  {
    text: 'Sobre',
    icon: <InfoIcon style={{ color: '#ffff' }}/>,
    path: about
  }
]

const itens = [
  {
    text: 'Home',
    icon: <Home style={{ color: '#ffff' }}/>,
    path: home
  },
  {
    text: 'Planta',
    icon: <EcoIcon style={{ color: '#ffff' }}/>,
    path: plantas
  },
  {
    text: 'Sair',
    icon: <ExitToApp style={{ color: '#ffff' }}/>
  }
]

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            title="Menu"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
            Sistema de Monitoramento para irrigação automatizada
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            {itens.map(item => (
              <ListItem
                button
                key={item.text}
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon title={item.text}>{item.icon}</ListItemIcon>
                <ListItemText style={{ color: '#ffff' }}>{item.text}</ListItemText>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {menuItens.map(item => (
              <ListItem
                button 
                key={item.text}
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon title={item.text}>{item.icon}</ListItemIcon>
                <ListItemText style={{ color: '#ffff' }}>{item.text}</ListItemText>
              </ListItem>
            ))}
          </List>
      </Drawer>    
    </div>
  );
}
