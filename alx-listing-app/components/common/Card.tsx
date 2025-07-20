// components/common/Card.tsx
import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  location,
  rating,
  price,
  features = [],
  tags = [],
  discount,
}) => {
  return (
    <div className="flex flex-col gap-4 w-[378px] h-auto">
      {/* Image section */}
      <div className="relative w-full h-[255px] rounded-[16.5px] overflow-hidden bg-gray-200">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        
        {/* Discount badge */}
        {discount && (
          <div className="absolute top-3 left-[-7px] bg-green-700 text-white px-4 py-2 rounded-tr-md rounded-br-md text-sm font-semibold">
            {discount}
          </div>
        )}

        {/* Progress dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-white" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tags like "Top Villa", "Self Checkin" */}
      <div className="flex flex-row gap-2 flex-wrap">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-[#F9F9F9] text-[#161117] text-xs font-medium px-4 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title / Location / Rating */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-[#161117]">{title}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-lg">★</span>
          <span className="text-sm font-medium text-[#161117]">{rating}</span>
        </div>
      </div>

      {/* Features */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4 text-sm text-[#161117]">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-1">
              {/* Replace below with actual icons if you have them */}
              <span>🔹</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-end gap-1">
          <span className="text-lg font-semibold text-[#161117]">${price}</span>
          <span className="text-sm text-gray-500">/n</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
