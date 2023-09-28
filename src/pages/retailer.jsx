import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";


import books_url from '../utils/baseUrl';

const url = `${books_url}/api`;

const Retailer = () => {
  const token = Cookies.get("accessToken");
  let userId = null;

  if (token) {
    const tokenPayload = JSON.parse(atob(token.split(".")[1]));
    userId = tokenPayload.userId;
  }

  const [bookdata, setBookdata] = useState([]);

  useEffect(() => {
    // Send a GET request to your API endpoint
    axios
      .get(`${url}/retailers/${userId}`)
      .then((response) => {
        const books = response.data.listedBooks;
        console.log(books);
        setBookdata(books);
      })
      .catch((error) => {
        console.error("Error fetching retailer data:", error);
      });
  }, []);

  const handleDelete = (bookId) => {
    // Send a DELETE request to your API endpoint
    axios
      .delete(`http://localhost:5000/api/books/${bookId}`)
      .then((response) => {
        // Handle the response from the server
        console.log("Book deleted successfully");
        // Remove the deleted book from the bookdata state
        const updatedBookdata = bookdata.filter(
          (item) => item.bookID._id !== bookId
        );
        setBookdata(updatedBookdata);
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
  };

  const handleDeleteClick = (bookId) => {
    // Implement your delete logic here
    console.log(`Delete book with ID: ${bookId}`);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center px-10 my-8">
        <div className="bg-white w-full flex items-center justify-center mt-8 p-5 text-[24px] font-medium leading-7 text-[#0c2f54]">
          hi esubalew
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Author</th>
              <th className="border border-gray-300 px-4 py-2">Gener</th>
              <th className="border border-gray-300 px-4 py-2">Stock</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookdata.length > 0 ? (
              bookdata.map((item, index) => (
                <tr key={index} className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">
                    {item.bookID ? item.bookID.title || "N/A" : "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.bookID ? item.bookID.author || "N/A" : "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.bookID ? item.bookID.genre || "N/A" : "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.stockQuantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.price || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() =>
                        handleDeleteClick(item.bookID ? item.bookID._id : null)
                      }
                      className="text-blue-500"
                    >
                      <RiEdit2Line />
                    </button>
                    <button
                      onClick={() =>
                        handleDelete(item.bookID ? item.bookID._id : null)
                      }
                      className="text-red-500"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No books found for this retailer.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Retailer;
