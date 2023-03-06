import React from "react";

function DeleteButton({ handleDelete }) {
  return (
    <button
      className="h-16 text-3xl  text-white
       bg-gray-600 hover:bg-gray-900 rounded-md focus:outline-none"
      onClick={handleDelete}
    >
      X
    </button>
  );
}

export default DeleteButton;
