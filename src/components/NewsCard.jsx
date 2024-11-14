import React from "react";
import { AiFillStar, AiOutlineShareAlt } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

const NewsCard = (props = {}) => {

const {singleNews} = props || {}
  return (
    <div className="card bg-base-100 border-2 shadow-md p-4 rounded-lg m-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={singleNews.author.img}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{singleNews.author.name}</p>
            <p className="text-gray-500 text-sm">
              {singleNews.author.published_date}
            </p>
          </div>
        </div>
        <AiOutlineShareAlt className="text-gray-500 cursor-pointer text-xl" />
      </div>

      {/* Image */}
      <img
        src={singleNews.thumbnail_url}
        alt="Thumbnail"
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      {/* Title */}
      <h2 className="text-lg font-semibold mb-2">{singleNews.title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">
        {singleNews.details}{" "}
        <span className="text-blue-600 cursor-pointer">Read More</span>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Rating */}
        <div className="flex items-center space-x-1 text-yellow-500">
          {Array.from({ length: 5 }, (_, i) => (
            <AiFillStar
              key={i}
              className={
                i < Math.floor(singleNews.rating.number)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-gray-600 ml-1">{singleNews.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-600 space-x-1">
          <FaEye />
          <span>{singleNews.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
