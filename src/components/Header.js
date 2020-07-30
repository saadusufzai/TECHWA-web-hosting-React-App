import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Switch from '@material-ui/core/Switch'

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
          <Button >Dark Mode</Button>
          <Switch
        checked={darkMode}
        onChange={()=>setDarkMode(!darkMode)}
        
      />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
