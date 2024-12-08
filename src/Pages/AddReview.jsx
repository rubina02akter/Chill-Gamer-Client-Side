import  { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";


const AddReview = () => {
  const {user} = useContext(AuthContext);
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
  

    const newReview = { photo, name, review, rating, genres, year,email };
    console.log(newReview);

    //send data to the server
    fetch("https://game-review-server-side.vercel.app/reviews", {
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
            text: "Review added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div>

     <Helmet>
       <title>Add Review|Chill Gamer</title>
        <meta name="description" content="Helmet application"></meta>
       </Helmet>

    <div className=" p-6 md:p-16">
      <h2 className="text-3xl font-extrabold text-white">Add Review</h2>
      <form onSubmit={handleReview} className="space-y-8">
        {/* form Game Cover Image and Game Title row */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-white">Game Cover Image</span>
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
              <span className="label-text text-white">Game Title</span>
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
              <span className="label-text text-white">Review Description</span>
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
              <span className="label-text text-white">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Provide a rating (e.g., 1-5)"
              min="1"
              max="5"
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
              <span className="label-text text-white">Publishing year</span>
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
              <span className="label-text text-white">Genres</span>
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
        <div className="md:flex gap-4">
        <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-white">User Email</span>
            </label>
            <label className="input-group">
              <input
              name="email"
                value={user?.email}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-white">User Name</span>
            </label>
            <label className="input-group">
              <input
                value={user?.displayName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Add Review"
          className="btn btn-block bg-gradient-to-r from-green-700 to-green-900 text-white text-lg"
        />
      </form>
    </div>
    </div>
  );
};

export default AddReview;
