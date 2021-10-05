import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowCourses from './ShowCourses/ShowCourses';


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <div className="container my-5 card p-5 shadow-lg">
                <div className="d-flex">
                    <div className="course-intro col-md-8 my-auto">
                        <div className="text-start">
                            <h2 className='fw-bold'>Learn Without Limits</h2>
                            <p>Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
                        </div>
                        <div>
                            <Link to='/instructor'>
                                <button className='btn btn-primary mx-3'><i class="fas fa-chalkboard-teacher"></i> Our Awesome Instructor</button>
                            </Link>

                            <Link to='/contact'>
                                <button className='btn btn-outline-success mx-3'><i class="fas fa-address-book"></i> Contact US</button>
                            </Link>
                        </div>
                    </div>

                    <div className="course-thumbnail col-md-4">
                        <img className='img-fluid' src="./courses-thumbnail.png" style={{ height: '200px' }} alt="" />
                    </div>
                </div>
            </div>

            <h2 className='fw-bold my-4 text-success'>List of Course Which We Offer</h2>

            <div class="container mx-auto row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 my-3">
                {
                    courses.map(course =>
                        <ShowCourses
                            key={course.courseCode}
                            course={course}
                        ></ShowCourses>
                    )
                }
            </div>
        </div>
    );
};

export default Courses;