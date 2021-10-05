import React from 'react';

const ShowCourse = (props) => {
    const { courseCode, courseTitle, rating, courseDetails, img } = props.course;

    return (
        <div className="col">
            <div className="card h-100" style={{ border: '2px solid gray' }}>
                <img src={img} className="rounded img-fluid card-img-top" style={{ height: '200px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><strong>{courseTitle}</strong></h5>
                    <p className="card-text">{courseDetails.slice(0, 100)}</p>
                    <p><strong>Rating: </strong>{rating}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted"><strong>Course Code:</strong> {courseCode}</small>
                </div>
            </div>
        </div>
    );
};

export default ShowCourse;