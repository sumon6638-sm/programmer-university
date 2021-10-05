import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../component/style.css'
import ShowCourse from './ShowCourse/ShowCourse';

const Home = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    },[])

    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./slider_image1.png" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h4 className='fw-bold fs-2 text-warning text-background'>#IMPROVING LIVES THROUGH LEARNING</h4>
                            <h1 className='fw-bold fs-2 text-background'>TOP CLASS LEARNING FROM EVERYWHERE</h1>
                            <p className='bg-success text-light fw-bold'>We believe everyone has the capacity to be creative. Turitor is a place where people develop their own potential.</p>
                            <div>
                                <Link to='/courses'>
                                    <button className='btn btn-warning mx-3'><i class="fas fa-book-reader"></i> Show All Courses</button>
                                </Link>

                                <Link to='/instructor'>
                                    <button className='btn btn-danger mx-3'><i class="fas fa-chalkboard-teacher"></i> Show All Instructor</button>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                    <div class="carousel-item">
                        <img src="./slider_image2.png" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1 className='fw-bold fs-2 text-background'>TOP CLASS LEARNING FROM EVERYWHERE</h1>

                            <div>
                                <Link to='/courses'>
                                    <button className='btn btn-success'><i class="fas fa-book-reader"></i> Show All Courses</button>
                                </Link>

                                <Link to='/instructor'>
                                    <button className='btn btn-danger'><i class="fas fa-chalkboard-teacher"></i> Show All Instructor</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./slider_image3.png" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1 className='fw-bold fs-2 text-background'>TOP CLASS LEARNING FROM EVERYWHERE</h1>
                            <div>
                                <Link to='/courses'>
                                    <button className='btn btn-success'><i class="fas fa-book-reader"></i> Show All Courses</button>
                                </Link>

                                <Link to='/instructor'>
                                    <button className='btn btn-danger'><i class="fas fa-chalkboard-teacher"></i> Show All Instructor</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
              
            <h2 className='fw-bold my-4 text-primary'>Our Featured Course</h2>

            <div class="container mx-auto row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-3">
                {
                    courses.map(course =>
                        <ShowCourse
                            key={course.courseCode}
                            course={course}
                        ></ShowCourse>
                    )
                }
            </div>
            
        </div>
    );
};

export default Home;