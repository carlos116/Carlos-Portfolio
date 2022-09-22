import React, { useEffect, useState } from 'react'

function Home() {

  const [loadedHome, setLoadedHome] = useState(false)

  useEffect(() => {
      setLoadedHome(true)
  },[]) 
 
  return (
    <section> 
      <div className={`home ${loadedHome && 'show-section'}`}>
        <img src='images/carlos_emoji.jpg' alt="Carlos-Emoji" />
        <div className="description">
            <h1>Carlos Hernando Suarez</h1>
            <p>Hey guys, I'm Carlos and I'm currently located in Colombia, this is my hometown and I really enjoy to live here, I love to sharp my coding skills on my free time by practicing, building projects and learning new skills! </p>
        </div>
      </div>
      <div className="social-container">
          <h4>Find me on social media 👍</h4>
          <ul className='social-links'>
                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/carlos-su%C3%A1rez-01153622b/"><i className="fab fa-linkedin" aria-hidden="true"></i> </a></li>
                <li><a target="_blank" rel="noreferrer" href="https://github.com/carlos116"><i className="fab fa-brands fa-github" aria-hidden="true"></i> </a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/hernando.suarez.31/"><i className="fab fa-facebook" aria-hidden="true"></i> </a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/carloshernando116/"><i className="fab fa-instagram" aria-hidden="true"></i> </a></li>
            </ul>
      </div>
    </section>
  )
}

export default Home