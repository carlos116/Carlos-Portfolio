import React, { useState, useEffect } from 'react'
import SingleProject from './SingleProject'


function Projects() {

  const [loadedProjects, setLoadedProjects] = useState(false)
  
  useEffect(() => {
      setLoadedProjects(true)
  },[]) 

  return (
    <section className={`projects ${loadedProjects && 'show-section'}`}>
      <h2 className='projects-header'>Check What I've Built!</h2>

        <div className="projects-container">

          <SingleProject 
            href='https://632b7285b10cc12ddb9312b2--vermillion-cannoli-53c275.netlify.app/'  
            img='images/ecommerce-img.jpg' 
            title='Ecommerce Project' 
            text='An awesome ecommerce website created using React, Redux, Bootstrap, React router, Redux and an excellent web design.' 
          />

          <SingleProject 
            href='https://teal-banoffee-552f5f.netlify.app/' 
            img='images/landing-page-img.jpg' 
            title='Landing Page' 
            text='A simple yet amazing responsive landing page made with Javascript, HTML and CSS.'
          />

          <SingleProject 
            href='https://login-register-116.onrender.com' 
            img='images/register-login-img.jpg' 
            title='Register/Login app' 
            text='A Full Stack login/register project built using Node.js, Express and MongoDB. Register now and see how it works!' 
          />

          <SingleProject 
            href='https://632b75ca37e4812d31e2b464--stellular-blancmange-2047e7.netlify.app/' 
            img='images/travel-website-img.jpg' 
            title='Travel Website' 
            text='Like to travel? Check this front-end responsive travel website, made with Tailwind CSS and React.' 
          />
          
        </div>
    </section>
  )
}

export default Projects