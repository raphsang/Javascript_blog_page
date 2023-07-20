import React from 'react'
import './sidebar.css'
import profile from '../img/profile.jpg'

export default function Sidebar () {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src={profile} width={200} height={200}
          alt=''
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Reiciendis laudantium
          yess i do blog please visit my site guys
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Music</li>
          <li className='sidebarListItem'>Style</li>
          <li className='sidebarListItem'>Sport</li>
          <li className='sidebarListItem'>Tech</li>
          <li className='sidebarListItem'>Cinema</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW ME</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-facebook-square'> </i>
          <i className='sidebarIcon fab fa-twitter-square'> </i>
          <i className='sidebarIcon fab fa-pinterest-square'> </i>
          <i className='sidebarIcon fab fa-instagram-square'> </i>
          <i className='sidebarIcon fab fa-linkedin'> </i>
        </div>
      </div>
    </div>
  )
}
