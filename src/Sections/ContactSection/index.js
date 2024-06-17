import React from 'react';
import { TodoContext } from '../../TodoContext';
import './ContactSection.css';


function ContactSection () {

  const [formData, setFormData] = React.useState({
    name: '',
    message: ''
  });

  const {
    theme
  } = React.useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  // const onChange = (event) => {

  // };


  return (
    <section  id='contact'>
      <div className="general-title">
        <h1>
          Contact me
          <span>
              Stay tune
          </span>
        </h1>
      </div>
      <div className='div-form'>
        <form  onSubmit={onSubmit}>
          <div className='input-box'>
            <div className='input-field field'>
              <input 
                type='text'
                placeholder='Full Name'
                id='input-name'
                className={`form-item theme-${theme}`}
                autoComplete='off'
              />
              <div className='error-txt'>
                Full Name can't be blank
              </div>
            </div>
            <div className='input-field field'>
              <input 
                type='text'
                placeholder='Email Address'
                id='input-email'
                className={`form-item theme-${theme}`}
                autoComplete='off'
              />
              <div className='error-txt'>
                Email can't be blank
              </div>
            </div>
          </div>
          <div className='input-box'>
            <div className='input-field field'>
              <input 
                type='text'
                placeholder='Phone Number'
                id='input-phone'
                className={`form-item theme-${theme}`}
                autoComplete='off'
              />
              <div className='error-txt'>
                Phone Number can't be blank
              </div>
            </div>
            <div className='input-field field'>
              <input 
                type='text'
                placeholder='Subject'
                id='input-subject'
                className={`form-item theme-${theme}`}
                autoComplete='off'
              />
              <div className='error-txt'>
                Subject can't be blank
              </div>
            </div>
          </div>
          <div className='textarea-field field'>
              <textarea 
                type='text'
                placeholder='Your Message'
                id='input-message'
                className={`form-item theme-${theme}`}
                autoComplete='off'
              ></textarea>
              <div className='error-txt'>
                Message can't be blank
              </div>
            </div>
            <button
              type='submit'
            > Send Message
            </button>
        </form>
      </div>
      
    </section>
  )
  };
  
  export { ContactSection };