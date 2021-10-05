import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const activeTab = {
        fontWeight: 'bold',
        border: '2px solid yellow',
        borderRadius: '5px'
    }

    return (
        <div className='header bg-dark'>
            <nav className='container navbar navbar-dark text-center'>
                <NavLink className='ms-3 text-warning text-decoration-none' activeStyle={activeTab} to='/home'>Home</NavLink>
                <NavLink className='text-warning text-decoration-none' activeStyle={activeTab} to='/courses'>Courses</NavLink>
                <NavLink className='text-warning text-decoration-none' activeStyle={activeTab} to='/instructor'>Instructor</NavLink>
                <NavLink className='text-warning text-decoration-none' activeStyle={activeTab} to='/about'>About</NavLink>
                <NavLink className=' text-warning text-decoration-none' activeStyle={activeTab} to='/contact'>Contact Us</NavLink>
                <button className='btn btn-outline-warning'><i class="fas fa-sign-in-alt"></i> Login/Register</button>
            </nav>
        </div>
    );
};

export default Navbar;