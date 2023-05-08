import React, { useState, useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();


    const additionalInfo = {
      website: 'www.example.com',
      referrer: document.referrer,
    };
  
    const formData = new FormData(form.current);
    formData.append('additionalInfo', JSON.stringify(additionalInfo));

    console.log(form.current)

    emailjs
      .sendForm('service_pifb3l7', 'template_l7puc7o', form.current, 'my-BQl-8NH4_nVjFr')
      .then(() => {
        setMessageSent(true);
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>kevinmcmackin@outlook.com</h5>
            <a href='mailto:kevinmcmackin@outlook.com'>Send Email</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>(506) 875-4975</h5>
            <a href='https://api.whatsapp.com/send?phone=5068754975' target='_blank' rel='noreferrer'>
              Send a Message
            </a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon linkedin-contact' />
            <h4>LinkedIn</h4>
            <h5>linkedin.com/in/kevin-mcmackin</h5>
            <a href='https://www.linkedin.com/in/kevin-mcmackin/' target='_blank' rel='noreferrer'>
              Connect
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='9' placeholder='Your Message' style={{ fontFamily: 'Poppins, sans-serif' }} required></textarea>
          <div className='form__sent'>
            <button type='submit' className='btn btn-primary'>
              Send Message
            </button>
            {messageSent && <span className='message__sent'>Message Sent!</span>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
