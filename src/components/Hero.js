import React from 'react'
import SvgProgrammingAnimate  from '../svgr/ProgrammingAnimate' 
import {  Typography, Button } from '@material-ui/core'
import Header from './Header'
import classes from '../css/Hero.module.css'
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";



const Hero = ({ darkMode,setDarkMode}) => {

    return (
       <div className= {classes.root}>
           <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
          
            <div className={classes.hero}>
            <Fade left>
                <div>
                    <Typography variant='h2' className={classes.heading} >Looking for a perfect website for you startup</Typography>
                    <Typography variant='h5' className={classes.subheading} >You are at the right place</Typography>
                    
                    <Button variant="contained" color='secondary' >Portfolio</Button>
                    <Button variant="outlined"  color='secondary' >Contact Us</Button>
                    
                </div>    
              </Fade>  
              
                <div>
              <Zoom> <SvgProgrammingAnimate  style={{fontSize:'300px'}} /></Zoom> 
                </div>    
            </div>
            
       </div>
    )
}

export default Hero

