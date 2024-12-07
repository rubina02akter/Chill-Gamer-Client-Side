import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

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
    <div className="overflow-x-auto px-4 py-6 sm:px-6 lg:px-8">
      <table className="min-w-full table-auto bg-white border-collapse shadow-lg rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left font-semibold">No</th>
            <th className="py-3 px-4 text-left font-semibold">Name</th>
            <th className="py-3 px-4 text-left font-semibold">Rating</th>
            <th className="py-3 px-4 text-left font-semibold">Category</th>
            <th className="py-3 px-4 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {watchLists.map((item, index) => (
            <tr key={item._id} className="border-b hover:bg-gray-50">
              <td className="py-4 px-4">{index + 1}</td>
              <td className="py-4 px-4">{item.name}</td>
              <td className="py-4 px-4">⭐ {item.rating}</td>
              <td className="py-4 px-4">{item.genres}</td>
              <td className="py-4 px-4">
                <button
                  className="btn btn-danger btn-sm"
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
  );
};

export default WatchList;
