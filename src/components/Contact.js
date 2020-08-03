import React from "react";
import classes from "../css/Contact.module.css";
import { Typography } from "@material-ui/core";

import Fade from "react-reveal/Fade";

import saad from "../images/3.JPG";
const Contact = () => {
 
  return (
    <Fade down>
      {" "}
      <div className={classes.contactBox}>
        <div className={classes.boxes}>
          <div className={classes.box}>
            <div className={classes.image}>
              <img src={saad} alt="Saad-Aslam" />
            </div>
            <Typography variant="h6"> M Saad Aslam</Typography>
            <Typography> Front-End Developer </Typography>
          </div>

          <div className={classes.box}>
            <div className={classes.image}>
              <img src={saad} alt="Saad-Aslam" />
            </div>
            <Typography variant="h6"> M Saad Aslam</Typography>
            <Typography variant=""> Front-End Developer </Typography>
          </div>

          <div className={classes.box}>
            <div className={classes.image}>
              <img src={saad} alt="Saad-Aslam" />
            </div>
            <Typography variant="h6"> M Saad Aslam</Typography>
            <Typography variant=""> Front-End Developer </Typography>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Contact;
