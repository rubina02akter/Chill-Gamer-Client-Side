import React from "react";
import { Link } from "react-router-dom";

const HomeCards = ({ card }) => {
  const { rating, name, photo, review } = card;

  return (
    <div>
     
        <div className="border shadow-xl">
      <div>
        <img  src={photo} alt="" className="w-[370px] h-[280px]" />
      </div>
      <div className="h-[190px] p-3 ">
      <h2 className="font-extrabold text-xl">Game Title: {name}</h2>
        <p className="text-lg font-semibold">Rating: {rating}</p>
           <p className="text-sm font-thin overflow-hidden">{review}</p>
          
      </div>

      <div className="p-3">
      <Link to={`/highestRated/${card._id}`} className="text-lg font-extrabold underline text-red-800"> Explore Details</Link>
      </div>
    
    </div>
    </div>
  
  
  );
};

export default HomeCards;
