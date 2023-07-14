import React from 'react'
import { fooddata } from './FoodData'
import { useState } from 'react';
import { useEffect } from 'react';
export default function Food() {
  
  //for slide
  const [index, setIndex] = useState(0);
  const image1 = ['image1.jpg', 'image2.jpg','image3.jpg','image4.jpg'];
  const image2 = ['image1.jpg', 'image2.jpg','image3.jpg','image4.jpg'];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % image1.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);  
  useEffect(() => {
    const intervalId = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % image2.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);  

  const [filterType, setFilterType] = useState('');

  const handleFilterChange = (e) => {
      setFilterType(e.target.value);
    };
  const filteredFood = fooddata.filter((food) =>
      food.type.toLowerCase().includes(filterType.toLowerCase())
    );  

  return (
    <div>
    <br></br><br></br><br></br>
      <div className='food-offers'>
      
      <div className='search-input'><input
      type='text'
      placeholder='Enter the food name'
      value={filterType}
      onChange={handleFilterChange}
    /></div>
     
    <div className='offers'>
    
      <div className='offer'>
      <img src={image1[index]} alt='Slide' style={{ width: '600px', height: '300px', top: '50%', position: 'top 120px',position:'static '}} />
      </div>
      <div className='offer'>
      <img src={image2[index]} alt='Slide' style={{ width: '600px', height: '300px', top: '50%', position: 'top 120px',position:'static '}} />
      </div>
    
    </div></div>
      
    {filteredFood.map((food) => (
        <div className='food-menu-contents' >
        <div className='food-menu-content' >
        <div key={food.id}>
        <div className='menu-image'>
        <img src={food.img} width={200} height={150} alt={food.type} /></div>
          <h3>{food.type}</h3>
          <p>{food.hotel}</p>
          <p>{food.rating}</p>
        </div></div>
        </div>
        ))}</div>
  )
}
