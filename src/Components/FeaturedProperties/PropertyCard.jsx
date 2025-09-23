import React from 'react';
import { FaStar, FaBed, FaBath, FaRulerCombined, FaParking, FaEye } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const PropertyCard = ({ property }) => {
    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <FaStar
                key={i}
                className={`text-xs ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            />
        ));
    };

    const renderAmenityTags = (amenities) => {
        return amenities.slice(0, 3).map((amenity, index) => (
            <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
            >
                {amenity}
            </span>
        ));
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-80">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                />
                {/* Property Type Badge */}
                <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-gray-600 bg-opacity-80 text-white text-xs rounded">
                        {property.type}
                    </span>
                </div>
                {/* Featured Badge */}
                {property.featured && (
                    <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded">
                            Featured
                        </span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-4">
                {/* Developer Name */}
                <div className="flex items-center text-xs text-gray-500 mb-2">
                    <span className="mr-1">🏢</span>
                    <span>DAMAC</span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {property.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-sm text-gray-600 mb-3">
                    <MdLocationOn className="mr-1 text-gray-400" />
                    <span>{property.location}</span>
                </div>

                {/* Price */}
                <div className="mb-3">
                    <span className="text-xl font-bold text-gray-900">
                        {property.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                        AED {Math.round(parseInt(property.price.replace(/[^0-9]/g, '')) / property.sqft)} per sqft
                    </span>
                </div>

                {/* Property Details */}
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                        <FaBed className="mr-1" />
                        <span>{property.beds} beds</span>
                    </div>
                    <div className="flex items-center">
                        <FaBath className="mr-1" />
                        <span>{property.baths} baths</span>
                    </div>
                    <div className="flex items-center">
                        <FaRulerCombined className="mr-1" />
                        <span>{property.sqft.toLocaleString()} sqft</span>
                    </div>
                </div>

                {/* Additional Details */}
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span>Floor {property.floor}</span>
                    <div className="flex items-center">
                        <FaParking className="mr-1" />
                        <span>{property.parking} Parking</span>
                    </div>
                    <div className="flex items-center">
                        <FaEye className="mr-1" />
                        <span>{property.view}</span>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                    <div className="flex mr-2">
                        {renderStars(property.rating)}
                    </div>
                    <span className="text-sm text-gray-600">{property.rating}</span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1">
                    {renderAmenityTags(property.amenities)}
                    {property.amenities.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            +{property.amenities.length - 3} more
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;