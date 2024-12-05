import React from "react";
import { Link } from "react-router-dom";

const HomeCards = ({ card }) => {
  const { rating, name, photo, review } = card;

  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src={photo}
            alt="review"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <Link to='' className="card-actions justify-end">
            <button className="btn btn-primary">Explore Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
