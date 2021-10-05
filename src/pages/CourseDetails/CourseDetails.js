import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CourseDetails = () => {
    const { courseCode} = useParams();
    // console.log(params);

    // const[course, setCourse] = useState({})

    // useEffect(() => {
    //     const url = `${courseCode}`
        
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    // },[])

    return (
        <div>
            <h3>More details coming soon about {courseCode}</h3>
        </div>
    );
};

export default CourseDetails;