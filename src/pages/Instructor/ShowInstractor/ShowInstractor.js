import React from 'react';


const ShowInstructor = (props) => {
    // console.log(props.instr);
    const { name, img, country, source } = props.instructor;
    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={img} className="rounded img-fluid card-img-top" style={{ height: '300px' }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold text-success">{name.slice(0,17)}</h5>
                    <p className="card-text">Teaching with: <b>{source}</b></p>
                </div>
                <div className="card-footer">
                    <small className="text-muted"><b>Graduated From: </b>{country}</small>
                </div>
            </div>
        </div>
    );
};

export default ShowInstructor;