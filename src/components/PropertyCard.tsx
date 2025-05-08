import React from 'react';

interface PropertyCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 sm:h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="w-full btn-secondary">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;