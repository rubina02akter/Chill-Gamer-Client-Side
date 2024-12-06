import React from "react";
import { Link } from "react-router-dom";

const HomeCards = ({ card }) => {
  const { rating, name, photo, review } = card;

  return (
    <div className="bg-gradient-to-r from-gray-800 to-black   flex justify-center items-center">
      <div className="grid gap-8">
        <div className="bg-transparent  shadow-lg overflow-hidden h-[400px]">
          <img
            src={photo}
            alt="game"
            className="w-[600px] h-[400px] object-cover  shadow-lg transition-transform duration-500 transform hover:scale-105"
          />
        </div>

        <div className="bg-transparent rounded-xl p-6 text-white shadow-lg max-w-sm h-[300px]">
          <div className="h-[200px]">
          <h2 className="text-2xl font-semibold mb-3">Game Title: {name}</h2>
          <p className="text-lg mb-4">Rating: {rating}</p>
          <p className="text-sm mb-6 text-gray-400">{review}</p>
          </div>
          <Link
            className="btn btn-success text-white w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 transition-colors duration-300"
            to={`/highestRated/${card._id}`}
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
