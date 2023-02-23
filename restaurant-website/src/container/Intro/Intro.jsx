import React, { useState } from 'react';

import {BsPlayFill, BsPauseFill} from 'react-icons/bs'
import {meal} from '../../constants'
import {images} from '../../constants'

import './Intro.css';

const Intro = () => {



  return (
  <div className='app__video'>
   
    <img src={images.dining} />

    <dv className="app__video-overlay flex__center">
      <div 
      className='app__video-overlay_circle flrx__center'>
     

      </div>
    </dv>
  </div>
)};

export default Intro;
