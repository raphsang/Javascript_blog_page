import React from 'react'
import './header.css'
import cover2 from '../img/cover2.jpg'

export default function Header () {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>@Ruff | Info</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img
        className='headerImg'
        src={cover2}
        alt=''
      />
    </div>
  )
}
