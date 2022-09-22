import React, { useState } from 'react'

function SingleProject(props) {

    const { href, img, title, text } = props;
    const [hoverProject, setHoverProject] = useState(false)
    
  return (
    <a target="_blank" rel="noreferrer" href={href}
        onMouseEnter={() => setHoverProject(true)}
        onMouseLeave={() => setHoverProject(false)}
    >
        <div className='project'>
            <img className={`${hoverProject ? 'project-img-darken' : 'project-img'}`} src={img}alt={title} />
            <div className="project-text">
                <h2 className={`${hoverProject ? 'project-title' : 'project-title-up'}`}>{title}</h2>
                <p className={`${hoverProject ? 'show-text' : 'hide-text'}`}>{text}</p>
            </div>
        </div>
    </a>
  )
}

export default SingleProject