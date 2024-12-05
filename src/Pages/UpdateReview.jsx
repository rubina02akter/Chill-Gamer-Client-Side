import React from 'react';

const UpdateReview = () => {
  return (
    <div className=" p-6 md:p-16">
      <h2 className="text-3xl font-extrabold">Update Review</h2>
      <form className="space-y-8" >

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

        <input type="submit" value="Update Review" className="btn btn-block bg-green-600 text-white text-lg"/>
      </form>
    </div>
  );
};


export default UpdateReview;