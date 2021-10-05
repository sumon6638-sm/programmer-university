import React from 'react';

const About = () => {
    return (
        <div className="container my-5 mx-auto g-4 d-flex">
            <div className="card col-md-6 shadow p-4 me-4">
                <h5 className='fw-bold'>WELCOME TO PROGRAMMER INTERNATIONAL UNIVERSITY...
                    <br /> <br /> We are Developer. An online learning community</h5>

                <p>Here, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts.</p>

                <button className='btn btn-outline-primary'>MORE ABOUT US</button>
            </div>

            <div className="col-md-6 ms-4 my-auto">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="card">
                            <div class="card-body bg-primary text-light fw-bold">
                                <h1><i class="fab fa-discourse"></i></h1>
                                <h2>5016+</h2>
                                <h5>Courses</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                        <div class="card">
                            <div class="card-body bg-danger text-light fw-bold">
                                <h1><i class="fas fa-trophy"></i></h1>
                                <h2>Award</h2>
                                <h5>Winner</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
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
    );
};

export default About;