import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCards from '../components/ReviewCards';

const AllReviews = () => {
  const reviewCards = useLoaderData(); // Data from the server
  const [displayedReviews, setDisplayedReviews] = useState(reviewCards); // Manage displayed data
  const [sortOption, setSortOption] = useState(""); // Sorting state
  const [filterGenre, setFilterGenre] = useState(""); // Filtering state

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
      setDisplayedReviews(reviewCards); // Reset to all reviews
    } else {
      const filteredReviews = reviewCards.filter((review) => review.genres === genre);
      setDisplayedReviews(filteredReviews);
    }
  };

  return (
    <div className='mt-12'>
 

      {/* Sort and Filter Controls */}
      <div className="flex justify-end gap-4 mb-6 w-11/12 mx-auto">
        {/* Sort Dropdown */}
        <select
          onChange={(e) => handleSort(e.target.value)}
          value={sortOption}
          className="select select-bordered w-36"
        >
          <option value="" disabled>
            Sort by
          </option>
          <option value="rating-asc">Rating (Ascending)</option>
          <option value="rating-desc">Rating (Descending)</option>
          <option value="year-asc">Year (Ascending)</option>
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

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 gap-6 w-11/12 mx-auto">
        {displayedReviews.map((reviewCard) => (
          <ReviewCards key={reviewCard._id} reviewCard={reviewCard}></ReviewCards>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
