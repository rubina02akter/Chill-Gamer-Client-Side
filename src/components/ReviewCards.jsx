import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Bg from '../../src/assets/images/gamingImg.jpg';

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

  
  const { name, description, photo, rating, genres, email } = detail || {}; 

  console.log(detail || "No details available");

  return (
    <div
    className="bg-cover bg-center w-full h-full"
    style={{ backgroundImage: `url(${Bg})` }}
  >
      {detail ? (
        <div className="flex justify-start text-white">
          <div className="grid m-12 border border-white p-6 bg-gradient-to-r from-gray-700 to-gray-900">
            <div className=" rounded-xl">
              <img src={photo} alt="game" className="w-[600px] h-[350px] object-cover  rounded-xl" />
            </div>

            <div className=" rounded-xl">
              <h2 className="">Game Title : {name}</h2>
              <p> Review : {description}</p>
              <p> Rating : {rating}</p>
              <p>Genre : {genres}</p>
              <p> Email : {email}</p>
              <Link className="btn btn-success text-white w-48" to='/'>Go Back</Link>
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