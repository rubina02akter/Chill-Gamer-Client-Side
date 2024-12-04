import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCards from '../components/ReviewCards';

const AllReviews = () => {

  const reviewCards = useLoaderData();


  return (
    <div>
      <h2>Reviews : {reviewCards.length}</h2>
      <div className='grid grid-cols-1 gap-6 w-11/12 mx-auto'>
        {
          reviewCards.map(reviewCard => <ReviewCards key={reviewCards._id} reviewCard={reviewCard}></ReviewCards>)
        }
      </div>
    </div>
  );
};

export default AllReviews;