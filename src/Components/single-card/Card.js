import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const{id,courses,img,country,rating,duration}=props.card||{}
    return (
        <div className="col-md-4 col-sm-6">
            <div className="card mb-3 h-100 bg-info" >
  <div className="row  ">
    {/* <div className="col-md-5">
      
    </div> */}
            <div className="col-md-12 text-center p-5">
            <img src={img} className=" img-fluid rounded mx-auto d-block" width="290px" height="200px" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> {courses}</h5>
        <p className="card-text">Duration: {duration}</p>
        <p className="card-text">Technology We use From {country} </p>
        <p className="card-text">Customer Rating: {rating} </p>
        <Link to={`/bookVehicle/${id}`}>
                            <button className="btn btn-success">Book Now</button>
                  </Link>
                
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;