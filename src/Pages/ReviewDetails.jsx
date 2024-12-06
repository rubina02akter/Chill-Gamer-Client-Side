import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import icon from '../../src/assets/icons/logo-1.png';

const ReviewDetails = () => {
  const { id } = useParams(); 
  const [detail, setDetail] = useState(null); 

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

  console.log(detail || "No details available");


  const handleWatchList = () => {
     fetch('https://game-review-server-side.vercel.app/watchlist',{
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify( detail )
     })
     .then(res => res.json())
     .then(data => {
      console.log(data)
      
     })
  }

  return (
    <div>
      {detail ? (
        <div className="py-12 flex justify-center ">
          <div className="flex flex-col lg:flex-row  gap-8 m-12">
            <div className=" rounded-xl">
              <img src={photo} alt="game" className="w-[600px] h-[350px] object-cover  rounded-xl" />
            </div>

            <div className=" rounded-xl  text-sm space-y-3 ">
            <h2 className="font-bold text-lg mt-2 mb-6">{review}</h2>
            <p>Game Title : {name} </p>
              <p> Rating : {rating}</p>
              <p>Genre : {genres}</p>
              <p> Email : {email}</p>
              <button className="btn btn-success text-white w-48"
              onClick={handleWatchList}
              >Add to WatchList</button>
                 <img src={icon} alt="" className="w-20 h-20 rounded-full" />
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
