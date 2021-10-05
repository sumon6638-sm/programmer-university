import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='header bg-dark'>
            <nav className='container navbar navbar-dark text-center'>
                <NavLink className='ms-3 text-warning text-decoration-none' to='/home'>Home</NavLink>
                <NavLink className='text-warning text-decoration-none' to='/courses'>Courses</NavLink>
                <NavLink className='text-warning text-decoration-none' to='/instructor'>Instructor</NavLink>
                <NavLink className='text-warning text-decoration-none' to='/about'>About</NavLink>
                <NavLink className=' text-warning text-decoration-none' to='/contact'>Contact Us</NavLink>
                <button className='btn btn-outline-warning'><i class="fas fa-sign-in-alt"></i> Login/Register</button>
            </nav>
        </div>
    );
};

export default Navbar;