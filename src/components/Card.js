import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, price, image, id }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="w-card w-card h-card h-card overflow-hidden rounded-md shadow-lg m-4 cursor-pointer bg-white transition-transform transform hover:scale-105 aspect-ratio-square"
      onClick={handleClick}
    >
      <div className="relative h-2/3 w-full aspect-ratio-square flex items-center justify-center">
        <img
          className="absolute w-3/4 h-3/4 object-cover rounded-t-md"
          style={{ objectFit: "contain" }}
          src={image}
          alt={title}
        />
      </div>
      <div className="p-4 flex flex-col justify-between h-1/3">
        <div className="flex flex-col justify-between h-full">
          <div className="text-gray-700 font-semibold line-clamp-2">
            {title}
          </div>
          <div className="flex-grow"></div>
        </div>
        <div className="text-blue-600 font-bold mt-2">${price}</div>
      </div>
    </div>
  );
};

export default memo(Card);
