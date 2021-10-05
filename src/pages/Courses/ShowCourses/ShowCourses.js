import React from 'react';
import { Link } from 'react-router-dom';

const ShowCourses = (props) => {
    const { courseCode, courseTitle, rating, courseDetails, courseFee, img } = props.course;

    const dynamicUrl = `/course/${courseCode}`;

    return (
        <div className="col">
            <div className="card h-100 shadow-lg">
                <img src={img} className="rounded img-fluid card-img-top" style={{ height: '200px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-success"><strong>{courseTitle}</strong></h5><hr />
                    <p><strong>Course Code: </strong>{courseCode}</p>
                    <p className="card-text">{courseDetails.slice(0, 100)}</p>
                    <Link to={dynamicUrl}><button className='btn btn-outline-secondary text-danger'><i class="fas fa-info-circle"></i> Course Details</button></Link>
                    
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <div className='fw-bold'>Course Fee: ${courseFee}</div>
                    <small className="text-muted">Rating: {rating}</small>
                </div>
            </div>
        </div>
    );
};

export default ShowCourses;