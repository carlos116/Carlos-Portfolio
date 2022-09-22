import React, { useEffect, useState } from 'react'

function About() {

  const [loadedAbout, setLoadedAbout] = useState(false)
  
  useEffect(() => {
      setLoadedAbout(true)
  },[])

  return (
    <section className={`about ${loadedAbout && 'show-section'}`}>
        <img src='images/carlos_emoji2.jpg' alt="" />
        <div className="description">
            <h1>Frontend Developer</h1>
            <ul>
              <p>I'm an enthusiastic, quick learner web developer eager to learn new technologies and gather more experience, I currently have:</p>
                <li>Experience with Frontend technologies like <span className='skills'>HTML, CSS, JavaScript</span>, with strong skills in problem-solving and web page design and structure.</li>
                <li>Excellent knowledge of <span className='skills'>React, React Router and Redux,</span> skilled on consuming <span className='skills'>REST APIs </span>and version management with <span className='skills'>Git.</span> Knowledge in <span className='skills'> Node.js and Express.</span></li>
                <li>Excellent communication skills with team members, bosses, and clients, and strong ability to build clean reusable code.</li>
            </ul>
        </div>
    </section>
  )
}

export default About