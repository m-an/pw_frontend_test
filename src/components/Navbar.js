import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo" href='/'>PW News</a>
                <ul className="right">
                    <li><Link to="/">Headlines</Link></li>
                    <li><NavLink to="/search">Search</NavLink></li>
                    <li><NavLink to="/us-publishers">List of US publishers</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)