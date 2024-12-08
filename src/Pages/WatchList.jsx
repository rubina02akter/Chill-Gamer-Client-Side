import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const WatchList = () => {
  const { user } = useContext(AuthContext);
  const [watchLists, setWatchLists] = useState([]);

  useEffect(() => {
    if (user.email) {
      fetch(`https://game-review-server-side.vercel.app/watchlist?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setWatchLists(data));
    }
  }, [user?.email]);

  const handleRemove = (id) => {
    fetch(`https://game-review-server-side.vercel.app/watchlist/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          Swal.fire("Removed!", "Review removed from Watchlist", "success");
          setWatchLists((prev) => prev.filter((item) => item._id !== id));
        }
      });
  };

  return (
    <>
    <Helmet>
       <title>Watchlist|Chill Gamer</title>
        <meta name="description" content="Helmet application"></meta>
       </Helmet>
   
    <div className="overflow-x-auto px-4 py-6 sm:px-6 lg:px-8">
      <table className="min-w-full table-auto bg-white border-collapse shadow-lg rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left font-semibold">No</th>
            <th className="py-3 px-4 text-left font-semibold">Name</th>
            <th className="py-3 px-4 text-left font-semibold">Rating</th>
            <th className="py-3 px-4 text-left font-semibold">Genres</th>
            <th className="py-3 px-4 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {watchLists.map((item, index) => (
            <tr key={item._id} className="border-b hover:bg-gray-50">
              <td className="py-4 px-4">{index + 1}</td>
              <td className="py-4 px-4 text-sm text-gray-800 md:table-cell block">
              <span className="md:hidden font-bold">Name: </span>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item.photo}
                      alt={`${item.name}'s Avatar`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">{user.email}</div>
                </div>
              </div>
            </td>
              <td className="py-4 px-4">⭐ {item.rating}</td>
              <td className="py-4 px-4">{item.genres}</td>
              <td className="py-4 px-4">
                <button
                  className="btn  bg-gradient-to-r from-red-600 to-red-800 text-white btn-sm"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default WatchList;
