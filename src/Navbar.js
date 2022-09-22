import React, { useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useGlobalContext } from './context';

function Navbar() {
  
  const { isMenuOpen, closeMenu, openMenu } = useGlobalContext()


  let menuRef = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if(!menuRef.current.contains(event.target)) {
        closeMenu()
      }
    })
  })
  
  return (
    <nav>
        <div className='navbar-content'>

        <Link className='router-link' to='/'><h3 className='name'>Carlos <span>Suarez</span></h3></Link>

        <ul ref={menuRef} className={`navbar-list ${isMenuOpen ? 'show' : null}`}>
            {isMenuOpen && <i onClick={() => closeMenu()}  className="fa-solid fa-xmark close-icon"></i>}
            <Link onClick={() => closeMenu()} className='router-link' to='/'><li>Home</li></Link>
            <Link onClick={() => closeMenu()} className='router-link' to='about'><li>About</li></Link>
            <Link onClick={() => closeMenu()} className='router-link' to='projects'><li>Projects</li></Link>
            <Link onClick={() => closeMenu()} className='router-link' to='contact'><li>Contact</li></Link>
        </ul>

        {!isMenuOpen && <i onClick={() => openMenu()} className="fa-solid fa-bars menu-icon"></i>}

        </div>
        <hr />
    </nav>
  )
}

export default Navbar