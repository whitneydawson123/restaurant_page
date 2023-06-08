import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css'

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title='Chase the new flavour' />
        <h1 className='app__header-h1'>The Key To Fine Dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0 ' }}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
  )
}

export default Header