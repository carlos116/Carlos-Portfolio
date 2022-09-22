import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';

const Result = () => {
  return <p className="result">Your message has been sent. We'll get in contact with you promptly!</p>
}

function Contact() {

  const [loadedContact, setLoadedContact] = useState(false)
  
  useEffect(() => {
      setLoadedContact(true)
  },[])

  const [result, setResult] = useState(false)
  const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a1gx6p6', 'template_btxmzkd', form.current, 'm3ou3dgKGFxjbU-Zm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setResult(true)
  };

  setTimeout(() => {
    setResult(false)
  }, 5000)

  return (
    <section className={`contact-container ${loadedContact && 'show-section'}`}>
      <form ref={form} className='contact-form' onSubmit={sendEmail}>
              <h2>Send me a message ✉️</h2>
              <input className='input-field' name='fullName' type="text" placeholder='Full name*' required/>
              <input className='input-field' name='email' type="text" placeholder='Email address*' required/>
              <textarea className='input-field' name="message" id="" rows="5" placeholder='Message'></textarea>
              <button className='submit-btn' type='submit'>Send message</button>
              <div>
                {result ? <Result /> : null}
              </div>
      </form>
      <div className="contact-info">
        <h3>Email</h3>
        <p>carloshsm31@gmail.com</p>
        <hr />
        <h3>Phone</h3>
        <p>+57 311 843 7616</p>
        <hr />
        <h3>Social Networks</h3>
        <ul className=' contact'>
            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/carlos-su%C3%A1rez-01153622b/"><i className="fab fa-linkedin" aria-hidden="true"></i> </a></li>
            <li><a target="_blank" rel="noreferrer" href="https://github.com/carlos116"><i className="fab fa-brands fa-github" aria-hidden="true"></i> </a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/hernando.suarez.31/"><i className="fab fa-facebook" aria-hidden="true"></i> </a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/carloshernando116/"><i className="fab fa-instagram" aria-hidden="true"></i> </a></li>
        </ul>
        <hr />
      </div>
    </section>
  )
}

export default Contact