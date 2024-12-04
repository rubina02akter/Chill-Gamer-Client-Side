import React from "react";
import Swal from "sweetalert2";

const AddReview = () => {
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const review = form.review.value;
    const rating = form.rating.value;
    const genres = form.genres.value;
    const year = form.year.value;
    const email = form.email.value;

    const newReview = { photo, name, review, rating, genres, year, email };
    console.log(newReview);

    //send data to the server
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          console.log("successfully added");
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className=" p-6 md:p-16">
      <h2 className="text-3xl font-extrabold">Add Review</h2>
      <form onSubmit={handleReview} className="space-y-8">
        {/* form Game Cover Image and Game Title row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Game Cover Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="URL for the game cover"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Game Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Game Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Review Description and Rating row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Review Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="review"
                placeholder="Review Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Provide a rating (e.g., 1-10)"
              min="1"
              max="10"
              step="1"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* form Publishing year and genre row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Publishing year</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="year"
                placeholder="Publishing year"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Genres</span>
            </label>
            <select
              name="genres"
              className="select select-bordered w-full text-gray-400"
              required
            >
              <option value="" disabled selected>
                Select one (e.g., Action, RPG, Adventure)
              </option>
              <option value="action">Action</option>
              <option value="rpg">RPG</option>
              <option value="adventure">Adventure</option>
              <option value="shooter">Shooter</option>
              <option value="puzzle">Puzzle</option>
            </select>
          </div>
        </div>
        {/* form row */}
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="email"
                placeholder="user's email address."
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Add Review"
          className="btn btn-block bg-green-600 text-white text-lg"
        />
      </form>
    </div>
  );
};

export default AddReview;
