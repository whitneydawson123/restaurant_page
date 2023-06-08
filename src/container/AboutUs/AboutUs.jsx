import React from 'react'
import { images } from '../../constants'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'> 
        <img src={images.G} alt="G_overlay" />
      </div>

      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon_img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam eius tenetur id qui voluptatem ratione quo accusamus neque mollitia. Quam itaque accusantium recusandae eveniet iste est ex asperiores earum.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>

        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt="knife_img" />
        </div>

        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, neque adipisci dicta, labore aut voluptatem nemo, possimus distinctio quod excepturi id dolorum quibusdam laudantium veritatis officia enim dolorem molestias expedita.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs