import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MyReviewCard = ({ e}) => {
  const{emails, setEmails} = useContext(AuthContext)
  const { photo, name, review, rating, genres, year, email, _id } = e;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
         `https://game-review-server-side.vercel.app/myReviews/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // update the loaded card state
              const remainingCards = emails.filter(
                (card) => card._id !== _id
              );
              setEmails(remainingCards);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto px-4 py-6 sm:px-6 lg:px-8">
      <table className="min-w-full table-auto bg-white border-collapse shadow-lg rounded-lg overflow-hidden">
        {/* Table Head (Hidden on small screens) */}
        <thead className="bg-gray-100 text-gray-600 hidden md:table-header-group">
          <tr>
            <th className="py-3 px-4 text-left font-semibold">No</th>
            <th className="py-3 px-4 text-left font-semibold">Name</th>
            <th className="py-3 px-4 text-left font-semibold">Rating</th>
            <th className="py-3 px-4 text-left font-semibold">Category</th>
            <th className="py-3 px-4 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Row */}
          <tr className="border-b hover:bg-gray-50 md:table-row block mb-4">
            {/* No column */}
            <td className="py-4 px-4 text-sm text-gray-800 md:table-cell block">
              <span className="md:hidden font-bold">No: </span>
              {/* You need to define the 'length' value */}1
            </td>

            {/* Name column */}
            <td className="py-4 px-4 text-sm text-gray-800 md:table-cell block">
              <span className="md:hidden font-bold">Name: </span>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={photo}
                      alt={`${name}'s Avatar`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{name}</div>
                  <div className="text-sm text-gray-500">{email}</div>
                </div>
              </div>
            </td>

            {/* Rating column */}
            <td className="py-4 px-4 text-sm text-gray-800 md:table-cell block">
              <span className="md:hidden font-bold">Rating: </span>
              <span className="badge badge-ghost badge-sm">⭐ {rating}</span>
            </td>

            {/* Category column */}
            <td className="py-4 px-4 text-sm text-gray-800 md:table-cell block">
              <span className="md:hidden font-bold">Category: </span>
              {genres}
            </td>

            {/* Actions column */}
            <td className="py-4 px-4 text-sm text-gray-800 md:table-cell block">
              <div className="flex flex-wrap gap-2">
                <Link
                  to={`/updateReview/${_id}`}
                  className="btn btn-primary btn-sm"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-error btn-sm"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyReviewCard;
