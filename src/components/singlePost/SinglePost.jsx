import React from 'react'
import './singlePost.css'
import cover3 from '../img/cover3.jpg'

export default function Single () {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          src={cover3}
          alt=''
          className='singlePostImg'
        />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit amet
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'> </i>
            <i className='singlePostIcon far fa-trash-alt'> </i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>Author: <b>Ruff</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quam impedit perferendis voluptatum at sunt aut eius in,
          magnam minima nihil quas repellat ad nemo doloremque
          laudantium deserunt saepe consectetur quis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quam impedit perferendis voluptatum at sunt aut eius in,
          magnam minima nihil quas repellat ad nemo doloremque
          laudantium deserunt saepe consectetur quis
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quam impedit perferendis voluptatum at sunt aut eius in,
          magnam minima nihil quas repellat ad nemo doloremque
          laudantium deserunt saepe consectetur quis
        </p>
      </div>
    </div>
  )
}
