import React from "react";
import { BsCart4 } from "react-icons/bs";

const Card = ({
  image,
  title,
  description,
  price,
  buttonAction,
  cardStyle,
}) => {
  return (
    <div
      className={`card ${cardStyle}`}
      style={{ width: "400px", border: "none" }}
    >
      <div className="card-header" style={{ borderBottom: "none" }}>
        <img src={image} className="card-img-top" title={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-price">SEK {price}</p>
        <div>
          <button className="btn btn-dark " onClick={buttonAction}>
            <BsCart4 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
