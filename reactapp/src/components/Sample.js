import React, { useState } from 'react';

const restaurantsData = [
  { id: 1, name: 'Restaurant 1', city: 'New York' },
  { id: 2, name: 'Restaurant 2', city: 'Los Angeles' },
  { id: 3, name: 'Restaurant 3', city: 'Chicago' },
  // Add more restaurant data here
];

function Sample() {
  const [cityFilter, setCityFilter] = useState('');

  const handleCityFilterChange = (e) => {
    setCityFilter(e.target.value);
  };

  const filteredRestaurants = restaurantsData.filter(
    (restaurant) =>
      restaurant.city.toLowerCase().includes(cityFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Restaurant List</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={cityFilter}
        onChange={handleCityFilterChange}
      />
      <ul>
        {filteredRestaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sample;