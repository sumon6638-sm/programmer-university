import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container my-5'>
            <img src="./404-error.jpg" alt="" />
            <div>
                <Link to='/'>
                    <button className='btn btn-success'>Go to HOME</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;