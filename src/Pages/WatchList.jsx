import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const WatchList = () => {
  const{user} = useContext(AuthContext);
  const [watchLists, setWatchLists] = useState([]);

  
  useEffect(() => {
    fetch("https://game-review-server-side.vercel.app/watchlist")
      .then((res) => res.json())
      .then((data) => {
        setWatchLists(data);
      });
  }, []);

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
          {/* Map through watchLists to create rows */}
          {watchLists.map((item, index) => (
            <tr key={item._id} className="border-b hover:bg-gray-50 md:table-row block mb-4">
              {/* No column */}
              <td className="py-4 px-4 text-sm text-gray-800 md:table-cell block">
                <span className="md:hidden font-bold">No: </span>
                {index + 1}
              </td>

              {/* Name column */}
              <td className="py-4 px-4 text-sm text-gray-800 md:table-cell block">
                <span className="md:hidden font-bold">Name: </span>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.photo || "https://via.placeholder.com/150"}
                        alt={`${item.name}'s Avatar`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.email}</div>
                  </div>
                </div>
              </td>

              {/* Rating column */}
              <td className="py-4 px-4 text-sm text-gray-800 md:table-cell block">
                <span className="md:hidden font-bold">Rating: </span>
                <span className="badge badge-ghost badge-sm">⭐ {item.rating}</span>
              </td>

              {/* Category column */}
              <td className="py-4 px-4 text-sm text-gray-800 md:table-cell block">
                <span className="md:hidden font-bold">Category: </span>
                {item.genres}
              </td>

              {/* Actions column */}
              <td className="py-4 px-4 text-sm text-gray-800 md:table-cell block">
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;
