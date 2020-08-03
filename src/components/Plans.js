import React from "react";
import classes from "../css/Plans.module.css";
import Svg2 from '../svgr/2'
import {  Typography } from "@material-ui/core";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
const Plans = () => {
  return (
    <div className={classes.services} >
       <Zoom><Svg2 style={{fontSize:'500px'}} /></Zoom> 
        <div>
          <Fade right>
            <Typography variant='h3' className={classes.heading} >Your Work is our responisbility</Typography>
            <Typography variant='h5' className={classes.subheading} >100% Work Gaurantee</Typography>
          </Fade>  
            </div>   
    </div>
  );
};

export default Plans;
