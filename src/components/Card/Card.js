import React from "react";


const Card = props => (


<div className="card">
<img className="card-img-top" style={{padding: '50px', height: '300px', width: '400px'}} src={props.image} alt={props.name}/>
<div className="card-body">
  <p className="card-text" style={{textAlign: "center"}}>{props.name}</p>
  <button style={{paddingLeft: '33%', paddingRight: '33%'}}> Add to Order </button>
</div>
</div>
);

export default Card;
