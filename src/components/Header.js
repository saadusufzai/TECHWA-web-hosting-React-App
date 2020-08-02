import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Switch from '@material-ui/core/Switch'
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
 
}));


const Header = ({ darkMode,setDarkMode}) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  position="fixed">
        <Toolbar>
          <Typography color='inherit' variant="h6" className={classes.title}>
            TECHWA
          </Typography>
          <ul className='menu'>
            <li><a>HOME</a></li>
            <li><a>ABOUT</a></li>
            <li><a>PORTFOLIO</a></li>
            <li><a>CONTACT</a></li>
          </ul>
        <Tooltip title='Toggle Dark/Light Theme'>  
          <Switch
        checked={darkMode}
        onChange={()=>setDarkMode(!darkMode)}
        
      /></Tooltip>
        </Toolbar>
        
      </AppBar>
    </div>
  );
};

export default Header;
