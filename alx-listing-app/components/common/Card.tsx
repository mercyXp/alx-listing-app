import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="border rounded shadow-md p-4">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
