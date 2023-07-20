import React from 'react'
import './post.css'
import cover from '../img/cover.jpg'

export default function Post () {
  return (
    <div className='post'>
      <img
        className='postImg'
        src={cover}
        alt=''
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum, dolor sit amet consectetur
          adipisicing elit.
        </span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Optio rerum aliquid eos ratione, quaerat
        repellendus, libero fugiat ab delectus dignissimos
        facere eveniet dolorum quo sed officiis vitae dolor?
        Id, repudiandae.
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Optio rerum aliquid eos ratione, quaerat
        repellendus, libero fugiat ab delectus dignissimos
        facere eveniet dolorum quo sed officiis vitae dolor?
        Id, repudiandae.
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Optio rerum aliquid eos ratione, quaerat
        repellendus, libero fugiat ab delectus dignissimos
        facere eveniet dolorum quo sed officiis vitae dolor?
        Id, repudiandae.
      </p>
    </div>
  )
}
