import React from 'react';
import {images} from '../../constants'

const SubHeading = ({title}) => (
  <div style={{marginBott: '1rem'}}>
  <p className='p__cormorant'>{title}</p>
  <img src={images.spoon} alt='spoon' className='spoon__mg'/>
  </div>
);

export default SubHeading;
