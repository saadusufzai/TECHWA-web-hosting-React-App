import React from 'react'
import SvgProgrammingAnimate  from '../svgr/ProgrammingAnimate' 
import {  Typography, Button } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Header from './Header'
import classes from '../css/Hero.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Hero = ({ darkMode,setDarkMode}) => {
   const styles= useStyles()

    return (
       <div className= {classes.root}>
           <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
            <div className={classes.hero}>
                <div>
                    <Typography variant='h2' className={classes.heading} >Looking for a perfect website for you startup</Typography>
                    <Typography variant='h5' className={classes.subheading} >You are at the right place</Typography>
                    
                    <Button variant="contained" color='secondary' >Portfolio</Button>
                    <Button variant="outlined"  color='secondary' >Contact Us</Button>
                    
                </div>    
                <div>
                <SvgProgrammingAnimate  style={{fontSize:'300px'}} />
                </div>    
            </div>

       </div>
    )
}

export default Hero

