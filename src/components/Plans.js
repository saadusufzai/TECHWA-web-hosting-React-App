import React from "react";
import classes from "../css/Plans.module.css";
import Svg2 from '../svgr/2'
import { Paper, Card, Button, Typography, Link } from "@material-ui/core";

const Plans = () => {
  return (
    <div className={classes.services} >
        <Svg2 style={{fontSize:'500px'}} />
        <div>
            <Typography variant='h3' className={classes.heading} >Your Work is our responisbility</Typography>
            <Typography variant='h5' className={classes.subheading} >100% Work Gaurantee</Typography>
            
            </div>   
    </div>
  );
};

export default Plans;
