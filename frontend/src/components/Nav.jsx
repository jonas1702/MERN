import React from 'react';
import { Link } from "react-router-dom"
import '../style.css'
import Logo from '../assets/LogoBookstore.png'

const Nav = () => {
    return (
        <nav className="nav">
            <div className='nav-container'>
                <img src={Logo} className='logo' alt="Logo" />   
                <div className="nav-container--user">
                    <Link to='/users/register'>
                        <button>Register</button>
                    </Link>
                    <Link to='/users/login'>
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
