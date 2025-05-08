import React from 'react';
import PropertyCard from './PropertyCard';

const properties = [
  {
    id: 1,
    title: "2 BHK in Wakad – ₹85L",
    description: "Spacious 2 BHK apartment in prime Wakad location, near schools and shops.",
    imageUrl: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 2,
    title: "3 BHK in Kothrud – ₹1.2 Cr",
    description: "Modern 3 BHK in Kothrud with balcony and garden views.",
    imageUrl: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 3,
    title: "Commercial Space in Hinjewadi – ₹45L",
    description: "Commercial space available for rent in the fast-developing Hinjewadi area.",
    imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
];

const PropertyListings = () => {
  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Featured Properties</h2>
        <p className="section-subtitle text-center">
          Discover our selection of premium properties across Pune
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              title={property.title}
              description={property.description}
              imageUrl={property.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;