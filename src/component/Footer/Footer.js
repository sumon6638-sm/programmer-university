import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark'>
            <div className="d-flex">
                <div className="col-md-6 text-warning">
                    <h3 className='text-start ms-2'>GET IN TOUCH</h3>
                    <div className="d-flex text-light">
                        <div className="col-md-6 text-start ms-2">
                            <p>7-14, Nikunja Housing Society South Khulshi, Chittagong</p>
                        </div>

                        <div className="col-md-6 text-start ms-2">
                            <p>88 031-2869877 , 88 031-2869899</p>
                            <p>mdsumoncse19@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 text-warning">
                    <h3 className='text-start ms-5'>USEFUL LINKS</h3>
                    <div className="text-light col-md-6 text-start ms-5">
                        <li>Bangladesh University</li>
                        <li>Ministry Of Education</li>
                        <li>Education Board Bangladesh</li>
                        <li>Government Of Bangladesh</li>
                    </div>
                </div>
            </div>
            <h6 className='text-warning mb-0 py-4'>© All Right Reserved Update Tech 2021</h6>
        </div>
    );
};

export default Footer;