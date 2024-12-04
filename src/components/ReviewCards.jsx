const ReviewCards = ({ reviewCard }) => {

  const{ photo, name, review, rating, genres }=reviewCard;


  return (
    <div className="grid md:grid-cols-2  border rounded-xl">
      <div className="md:w-2/3 w-full">
        <img src={photo} alt="" className="w-[400px] md:h-[200px] h-[150px] rounded-xl object-cover"/>
      </div>
      <div className="flex flex-col justify-center">
      <h2 className="card-title">{name}</h2>
          <p>{review}</p>
        <div className="card-actions justify-start">
             <button className="btn btn-outline">Explore Details</button>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="card card-side bg-base-100 shadow-xl">
    //     <div className="lg:w-1/3 md:w-1/4 ">
    //       <img
    //         src={photo}
    //         className="lg:w-[400px] md:w-[300px] w-full  h-[200px] rounded-lg object-cover"
    //         alt="Movie"
    //       />
    //     </div>
    //     <div className="card-body">
    //       <h2 className="card-title">{name}</h2>
    //       <p>{review}</p>
    //       <div className="card-actions justify-start">
    //         <button className="btn btn-outline">Explore Details</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ReviewCards;
