import React from 'react';

const About = () => {
    return (
        <div>
            <div className="container my-5 mx-auto g-4 d-flex">
                <div className="card col-md-6 shadow p-4 me-4">
                    <h5 className='fw-bold'>WELCOME TO PROGRAMMER INTERNATIONAL UNIVERSITY...
                        <br /> <br /> We are Developer. An online learning community</h5>

                    <p>Here, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts.</p>

                    <button className='btn btn-outline-primary'>MORE ABOUT US</button>
                </div>

                <div className="col-md-6 ms-4 my-auto">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <div class="card-body bg-primary text-light fw-bold">
                                    <h1><i class="fab fa-discourse"></i></h1>
                                    <h2>5016+</h2>
                                    <h5>Courses</h5>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <div class="card-body bg-danger text-light fw-bold">
                                    <h1><i class="fas fa-trophy"></i></h1>
                                    <h2>Award</h2>
                                    <h5>Winner</h5>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <div class="card-body bg-success text-light fw-bold">
                                    <h1><i class="fas fa-user-graduate"></i></h1>
                                    <h2>9560+</h2>
                                    <h5>Student</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <h2 className='fw-bold'>Sponsored By:</h2>
                <div>
                    <img className='mx-4 my-5' src="./sponsor_logo1.png" alt=" className='card'" />
                    <img className='mx-4 my-5' src="./sponsor_logo2.png" alt=" className='card'" />
                    <img className='mx-4 my-5' src="./sponsor_logo3.png" alt=" className='card'" />
                    <img className='mx-4 my-5' src="./sponsor_logo4.png" alt=" className='card'" />
                    <img className='mx-4 my-5' src="./sponsor_logo5.png" alt="" />
                </div>

                <div>
                    <img className='mx-4 my-5' style={{height:'150px'}} src="./sponsor_logo6.png" alt=" className='card'" />
                    <img className='mx-4 my-5' style={{height:'150px'}} src="./sponsor_logo7.png" alt=" className='card'" />
                    <img className='mx-4 my-5' style={{height:'150px'}} src="./sponsor_logo8.jpg" alt=" className='card'" />
                    <img className='mx-4 my-5' style={{height:'150px'}} src="./sponsor_logo9.jpeg" alt=" className='card'" />
                    <img className='mx-4 my-5' style={{height:'150px'}} src="./sponsor_logo10.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;