import React from 'react'
import './styles/Header.scss'

function Header() {
  return (
    <div className='header'>
        <div className='header__logo'>
        <h1>flourishgold</h1>
        </div>
        <nav>
            <ul>
                <div className='closed'>

                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Header