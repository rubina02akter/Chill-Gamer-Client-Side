import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { FcLike } from "react-icons/fc";
const ReviewDetails = () => {
  const { id } = useParams(); 
  const [detail, setDetail] = useState(null); 
  const{user} = useContext(AuthContext)

  useEffect(() => {
    fetch("https://game-review-server-side.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
     
        const find = data.find((d) => d._id === id);
        setDetail(find);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]); 

  
  const { name, review, photo, rating, genres, email,year } = detail || {}; 



  const handleWatchList = () => {
    if (!user) {
      Swal.fire("Error", "You must be logged in to add to Watchlist", "error");
      return;
    }
  
    const watchListData = {
      email: user.email,
      username: user.displayName,
      gameId: detail._id,
      name: detail.name,
      photo: detail.photo,
      genres: detail.genres,
      rating: detail.rating,
    };
  
    fetch("https://game-review-server-side.vercel.app/watchlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(watchListData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          Swal.fire("Error", data.message, "error");
        } else {
          Swal.fire("Success", "Added to Watchlist", "success");
        }
      });
  };
  

  return (
    <div>
      {detail ? (
        <div className="py-12 flex justify-center bg-gradient-to-r from-gray-950 to-gray-700 text-white">
          <div className="flex flex-col lg:flex-row  gap-4 m-12">
            <div className=" rounded-xl">
              <img src={photo} alt="game" className="border border-white w-[600px] h-[350px] object-cover  rounded-xl" />
            </div>

            <div className=" rounded-xl  text-sm space-y-3">
            <h2 className="font-bold text-lg mt-2 mb-6">{review}</h2>
            <p>Game Title : {name} </p>
              <p> Rating : {rating}</p>
              <p>Genre : {genres}</p>
              <p> Email : {email}</p>
              <button className="btn w-48  bg-gradient-to-r from-green-600 to-green-900 text-white"
              onClick={handleWatchList}
              ><FcLike />Add to WatchList</button>
 
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

export default ReviewDetails;
