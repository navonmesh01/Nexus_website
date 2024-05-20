import React from 'react'
import { Container } from '../Container';
import {motion} from 'framer-motion';
// interface props{title}
const HeroText = (props) => {
  return (
    <div>
        <Container className='text-hai'>
            <h2>{props.title}</h2>
        </Container>
    </div>
  )
}

export default HeroText