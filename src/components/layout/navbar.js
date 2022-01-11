import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
        return (
            <nav className='navbar bg-primary'>
                <h1>{props.title}</h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        )
}

Navbar.defaultProps = {
    title: 'Test App'
}

export default Navbar
