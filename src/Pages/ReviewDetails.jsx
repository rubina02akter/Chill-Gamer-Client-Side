import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  
  const { name, description, photo, rating, genres, email } = detail || {}; 

  console.log(detail || "No details available");

  return (
    <div>
      {detail ? (
        <div className="flex justify-center">
          <div className="grid m-12">
            <div className=" rounded-xl">
              <img src={photo} alt="game" className="w-[600px] h-[350px] object-cover  rounded-xl" />
            </div>

            <div className=" rounded-xl">
              <h2 className="">Game Title : {name}</h2>
              <p> Review : {description}</p>
              <p> Rating : {rating}</p>
              <p>Genre : {genres}</p>
              <p> Email : {email}</p>
              <button className="btn btn-success text-white w-48">Add to WatchList</button>
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
