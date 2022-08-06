import React from 'react'
import '../css/NavBar.css'
import logo from '../assets/logo.png'

function NavBar() {
    return (
        <nav className="nav--container">
            <div className='nav--logoContainer'>
                <img src={logo} className='nav--logo' />
                <p className='nav--logoText'>TravelJournal</p>
            </div>
            <button className='nav--addBtn'>+</button>
        </nav>
    )
}

export default NavBar;