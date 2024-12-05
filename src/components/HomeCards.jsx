import React from "react";
import { Link } from "react-router-dom";

const HomeCards = ({ card }) => {
  const { rating, name, photo, review } = card;
 

  return (
    <div>
     <div className="flex justify-center">
          <div className="grid m-6">
            <div className=" rounded-xl">
              <img src={photo} alt="game" className="w-[600px] h-[350px] object-cover  rounded-xl" />
            </div>

            <div className=" rounded-xl">
              <h2 className="">Game Title : {name}</h2>
         
              <p> Rating : {rating}</p>
            
              <Link className="btn btn-success text-white w-48" to={`/highestRated/${card._id}`}>Explore</Link>
            </div>
          </div>
        </div>
    </div>



  );
};

export default HomeCards;
