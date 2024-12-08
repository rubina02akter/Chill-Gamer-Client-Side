import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {  useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateReview = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);

 
  useEffect(() => {
    fetch(`https://game-review-server-side.vercel.app/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data))
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const review = form.review.value;
    const rating = form.rating.value;
    const genres = form.genres.value;
    const year = form.year.value;
    const email = form.email.value;
    const updatedReview = { photo, name, review, rating, genres, year, email };

    // update the review
    fetch(`https://game-review-server-side.vercel.app/myReviews/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
       toast("Update successful:", data);
        if (data.insertedId) {
         toast("successfully added");
        }
      });
  };

  if (!review) return <div>Loading...</div>;

  return (
    <>
     <Helmet>
       <title>Update Review|Chill Gamer</title>
        <meta name="description" content="Helmet application"></meta>
       </Helmet>
    <div className="p-6 md:p-16">
      <h2 className="text-3xl font-extrabold text-white">Update Review</h2>
      <form className="space-y-8" onSubmit={handleUpdate}>
        {/* Prefill form fields with existing data */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-white">Game Cover Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={review.photo}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-white">Game Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={review.name}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-white">Review Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="review"
                defaultValue={review.review}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-white">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              defaultValue={review.rating}
              min="1"
              max="10"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-white">Publishing Year</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="year"
                defaultValue={review.year}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-white">Genres</span>
            </label>
            <select
              name="genres"
              defaultValue={review.genres}
              className="select select-bordered w-full"
            >
              <option value="action">Action</option>
              <option value="rpg">RPG</option>
              <option value="adventure">Adventure</option>
              <option value="shooter">Shooter</option>
              <option value="puzzle">Puzzle</option>
            </select>
          </div>
        </div>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="email"
                defaultValue={review.email}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        
          <input
            type="submit"
            value="Update Review"
            className="btn btn-block bg-gradient-to-r from-green-700 to-green-900 text-white text-lg"
          />
       
      </form>
    </div>
    </>
  );
};

export default UpdateReview;
