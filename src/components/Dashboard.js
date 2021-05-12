import React from 'react'
import Navbar from './Navbar';
//import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ListSubheader from '@material-ui/core/ListSubheader';
//import DashboardIcon from '@material-ui/icons/Dashboard';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//import PeopleIcon from '@material-ui/icons/People';
//import BarChartIcon from '@material-ui/icons/BarChart';
//import LayersIcon from '@material-ui/icons/Layers';

import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//import AssignmentIcon from '@material-ui/icons/Assignment';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
//import "./main.styles.css"
import Feed from "./feed";
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import Sidecard2 from "./Sidecard2";
import Othercards from "./Othercards";
import Adver from "./Adver"
import Header from './Header';
import Post from './posts';
import Ask from './Ask'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    //width: '100%',
    //maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Dashboard () {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  function FormRow() {
      return(
      <React.Fragment>
        <Grid item sm={3} xs={12} >
          <Paper className={classes.paper}  id="re">
            <div>
            <Sidecard2 />
            </div>
            <br/>
            
            <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders" >
         <ListItem
            button
            selected={selectedIndex === '10'}
            onClick={(event) => handleListItemClick(event, '10')}>       
      <ListItemIcon className="x">
        <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText >All</ListItemText>
    </ListItem>
            <ListItem
            button
            selected={selectedIndex === '0'}
            onClick={(event) => handleListItemClick(event, '0')}>       
      <ListItemIcon className="x">
        <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText >Academics</ListItemText>
    </ListItem>
    <ListItem button
          selected={selectedIndex === '1'}
          onClick={(event) => handleListItemClick(event, '1')}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Admissions" />
    </ListItem>
    <ListItem button
          selected={selectedIndex === '2'}
          onClick={(event) => handleListItemClick(event, '2')}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Campus" />
    </ListItem>
    <ListItem button
          selected={selectedIndex === '3'}
          onClick={(event) => handleListItemClick(event, '3')}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Hostel" />
    </ListItem>
    <ListItem button
          selected={selectedIndex === '4'}
          onClick={(event) => handleListItemClick(event, '4')}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Faculty" />
    </ListItem>
    <ListItem button
          selected={selectedIndex === '5'}
          onClick={(event) => handleListItemClick(event, '5')}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Placement" />
    </ListItem>
    <ListItem button
          selected={selectedIndex === '6'}
          onClick={(event) => handleListItemClick(event, '6')}>
      <ListItemIcon className="x">
      <ArrowRightSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Examination" />
    </ListItem>
      </List></div>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          {/* <Feed />
           */}
           <br/>
           <br />
           <br />
           Ayush
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
          {/* <Othercards /> */}
          </Paper>
        </Grid>
      </React.Fragment>
      );
  }
  return(
      <div>
          <Header />
          <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
     </div>
     </div>
  );
}
export default Dashboard;