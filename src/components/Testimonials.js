import React from 'react'
import Fade from 'react-reveal/Fade'
import { Card, Typography } from '@material-ui/core'
import {motion} from 'framer-motion'

const Testimonials = () => {
    return (
        <section className="testimonials">
    <Fade left><Typography className="heading" variant='h4' align='center'>TESTIMONIALS</Typography></Fade>
    <Fade up> 
     <div className="cards">
        <motion.Card 
        whileHover={{scale:1.1}}
        elevation='100' className="card">
          <div className="inner-cards">
            <div className="quote">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              <Typography  color='primary'>It was an amazing experience working with TECHWA.</Typography>
              <Typography  color='primary' variant='subtitle1' align='center'>-- Andrew Simons</Typography>
            </div>

            <div className="dots">
              <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </div>
          </div>
        </motion.Card>
        <motion.Card 
        whileHover={{scale:1.1}}
        elevation='100' className="card">
          <div className="inner-cards">
            <div className="quote">
              <i  className="fa fa-quote-left" aria-hidden="true"></i>
              <Typography color='primary' >It was an amazing experience working with TECHWA.</Typography >
              <Typography  color='primary' variant='subtitle1' align='center'>-- Zak Andrison</Typography>
            </div>

            <div className="dots">
              <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </div>
          </div>
        </motion.Card>
      </div>
      </Fade>
    </section>
    )
}

export default Testimonials
