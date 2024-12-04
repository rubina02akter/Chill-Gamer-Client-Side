const ReviewCards = ({ reviewCard }) => {

  const{ photo, name, review, rating, genres }=reviewCard;


  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            className="lg:w-[400px] md:w-[300px] w-[250px] lg:h-[200px] md:h-[180px] h-[230px] "
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{review}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-outline">{genres}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
