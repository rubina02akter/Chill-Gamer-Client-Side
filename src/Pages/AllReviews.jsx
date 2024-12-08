import  { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [filterGenre, setFilterGenre] = useState("");


  useEffect(() => {
    // Fetch all reviews
    fetch("https://game-review-server-side.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setDisplayedReviews(data);
      });
  }, []);

  useEffect(() => {
    // Reset displayed reviews when reviews are fetched
    setDisplayedReviews(reviews);
  }, [reviews]);

  // Handle Sorting
  const handleSort = (option) => {
    setSortOption(option);

    let sortedReviews = [...displayedReviews];
    if (option === "rating-asc") {
      sortedReviews.sort((a, b) => a.rating - b.rating);
    } else if (option === "rating-desc") {
      sortedReviews.sort((a, b) => b.rating - a.rating);
    } else if (option === "year-asc") {
      sortedReviews.sort((a, b) => a.year - b.year);
    } else if (option === "year-desc") {
      sortedReviews.sort((a, b) => b.year - a.year);
    }

    setDisplayedReviews(sortedReviews);
  };

  // Handle Filtering
  const handleFilter = (genre) => {
    setFilterGenre(genre);

    if (genre === "") {
      setDisplayedReviews(reviews);
    } else {
      const filteredReviews = reviews.filter((review) => review.genres === genre);
      setDisplayedReviews(filteredReviews);
    }
  };

  return (
    <>
     <Helmet>
       <title>All Review|Chill Gamer</title>
        <meta name="description" content="Helmet application"></meta>
       </Helmet>
       <div className='pb-12 '>
      

      {/* Sort and Filter Controls */}
      <div className="flex justify-end gap-4 mb-6 w-11/12 mx-auto mt-6">
        {/* Sort Dropdown */}
        <select
          onChange={(e) => handleSort(e.target.value)}
          value={sortOption}
          className="select select-bordered w-36 "
        >
          <option value="" disabled>
            Sort by
          </option>
        
          <option value="rating-desc">Rating (Descending)</option>
       
          <option value="year-desc">Year (Descending)</option>
        </select>

        {/* Filter Dropdown */}
        <select
          onChange={(e) => handleFilter(e.target.value)}
          value={filterGenre}
          className="select select-bordered"
        >
          <option value="">All Genres</option>
          <option value="action">Action</option>
          <option value="rpg">RPG</option>
          <option value="adventure">Adventure</option>
          <option value="shooter">Shooter</option>
          <option value="puzzle">Puzzle</option>
        </select>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {displayedReviews.map((review) => (
          <div
            key={review._id}
            className="card bg-gray-100 shadow-lg p-4 rounded-md"
          >
            <img
              src={review.photo}
              alt={review.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mt-2">{review.name}</h3>
            <p>
              <strong>Genre:</strong> {review.genres}
            </p>
            <p>
              <strong>Rating:</strong> {review.rating}/5
            </p>
            <p>
              <strong>Year:</strong> {review.year}
            </p>
            <Link to={`/review/${review._id}`} >
              <button className="btn btn-block bg-gradient-to-r from-red-900 to-red-500 text-white mt-4">
                Explore Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>

    </>
  
  );
};

export default AllReviews;
