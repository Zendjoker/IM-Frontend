import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
  <div className='all-containet-navbar'>
    <div className='navbar-container'>
        <div className='topleft-side'>
            <img className='image-company' 
            src='https://www.adobe.com/fr/express/create/logo/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium' alt="" />
            <span className='company-title'> Company Title</span>
       
        </div>
        <div className='principal-nav'>
            <button className='left-choose'>Home</button>
            <button className='left-choose'>Configuration</button>
            <button className='left-choose'>Products</button>
            <button className='left-choose'>Expenses</button>
            <button className='left-choose'>Profit</button>
            <button className='left-choose'>Global statistics</button>
            <button className='left-choose'>Settings</button>
        
        </div>
        
    </div>
    
    </div>
  )
}
