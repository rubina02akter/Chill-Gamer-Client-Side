import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Bg from '../../src/assets/images/4884841.jpg';

const ReviewCards = () => {
  const { id } = useParams(); 
  const [detail, setDetail] = useState(null); 

  useEffect(() => {
    fetch("https://game-review-server-side.vercel.app/highestRated")
      .then((res) => res.json())
      .then((data) => {
        // Find the review based on 'id'
        const find = data.find((d) => d._id === id);
        setDetail(find);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]); 

  
  const { name, review, photo, rating, genres, email } = detail || {}; 

  console.log(detail || "No details available");

  return (
    <div
    className="bg-cover bg-center w-full h-full"
    style={{ backgroundImage: `url(${Bg})` }}
  >
      {detail ? (
        <div className="flex justify-center text-white lg:w-7/12 md:w-9/12 mx-auto">
          <div className="grid m-12 border border-white p-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl">
            <div className=" rounded-xl">
              <img src={photo} alt="game" className="w-[600px] h-[350px] object-cover  rounded-xl" />
            </div>

            <div className=" rounded-xl space-y-2 font-thin text-xs">
              <h2 className="font-thin text-lg mt-2">{review}</h2>
              <p>Game Title : {name} </p>
              <p> Rating : {rating}</p>
              <p>Genre : {genres}</p>
              <p> Email : {email}</p>
              <Link className="btn  bg-gradient-to-r from-blue-900 to-rose-800 text-white btn-block" to='/'>Go Back</Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center"><span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span></p>
      )}
    </div>
  );
};
export default ReviewCards;