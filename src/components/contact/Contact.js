import './contact.css';
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useRef, useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../context';

const Contact = () => {
  const theme = useContext(ThemeContext);
  const formRef = useRef();
  const inputStyle = theme.state.darkmode ? { backgroundColor: '#333', color: 'white' } : {};
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = formRef.current;
    if (formValues['user_name'].value === '' || formValues['user_subject'].value === '' || formValues['user_email'].value === '' || formValues['message'].value === '') {
      return toast.warn('Please fill all feilds');
    }
    emailjs.sendForm('service_s46503t', 'template_hz54p2q', formRef.current, '-ywpKtIzcZBmlK26o')
      .then((result) => {
        result.text === 'OK' && toast.success("Email Sent!");
        e.target.reset();
      }, (error) => {
        toast.error("Something went wrong!");
        e.target.reset();
      });
  }
  return (
    <div className="c">
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Let's discuss your project</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <img src={Phone} alt='' className='c-icon' />
              +91 8073 225 795
            </div>
            <div className='c-info-item'>
              <img src={Email} alt='' className='c-icon' />
              shrikanthg18@gmail.com
            </div>
            <div className='c-info-item'>
              <img src={Address} alt='' className='c-icon' />
              Bengaluru, 560099.
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={inputStyle} type='text' placeholder='Name' name='user_name' />
            <input style={inputStyle} type='text' placeholder='Subject' name='user_subject' />
            <input style={inputStyle} type='text' placeholder='Email' name='user_email' />
            <textarea style={inputStyle} rows='5' placeholder='Message' name='message' />
            <button>Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </div>
  )
}

export default Contact;