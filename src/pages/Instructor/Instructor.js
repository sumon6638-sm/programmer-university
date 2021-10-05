import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowInstructor from './ShowInstractor/ShowInstractor';

const Instructor = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('./instructor.json')
            .then(res => res.json())
        .then(data=>setInstructors(data))
    },[])

    return (
        <div>

            <div className="container my-5 card p-5 shadow-lg">
                <div className="d-flex">
                    <div className="course-thumbnail col-md-4">
                        <img className='img-fluid' src="./instructor.jpg" style={{ borderRadius:'50%', height:'300px'}} alt="" />
                    </div>

                    <div className="course-intro col-md-8 ms-4 my-auto">
                        <div>
                            <h2 className='fw-bold'>About Our Instructor</h2>
                            <p>An instructor is a teacher. One can be an instructor of just about anything, but it usually applies to teaching hands-on skills, like a water-skiing instructor or the instructor of the knitting class held at the community center.</p>
                        </div>
                        <div>
                            <Link to='/contact'>
                                <button className='btn btn-outline-success mx-3'><i class="fas fa-address-book"></i> Contact US</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className='fw-bold my-4 text-danger'>Our Honourable Instructor</h2>
            
            <div class="container mx-auto row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 my-3">
                {
                    instructors.map(instructor =>
                        <ShowInstructor
                            key={instructor.rank}
                            instructor={instructor}
                        ></ShowInstructor>
                    )
                }
            </div>
        </div>
    );
};

export default Instructor;