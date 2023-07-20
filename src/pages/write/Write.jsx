import './write.css'
import React from 'react'

export default function Write () {
  return (
    <div className='write'>
      <img
        className='writeImg'
        src='https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/unsplash-Josh-Earl.jpg'
        alt=''
      />
      <form className='writeFrom'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'> </i>
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus='true'
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell your story.....'
            type='text'
            className='writeInput writeText'
          />
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}
