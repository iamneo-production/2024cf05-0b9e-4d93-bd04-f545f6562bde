import React from 'react';
import { fooddata } from './FoodData';
import { useParams } from 'react-router-dom';
export default function FoodMenu() {

  
    
    const FoodMenu = () => {
        const { id } = useParams();
        const food = fooddata[id];
        const selectedFood = fooddata.find((food) => food.id === id);
    
        return (
          <div>
          <br></br>
          <br></br>
          <br></br>
          <h2 style={{ color: 'red' }}>Food Menu</h2>
          {selectedFood && (
            <div className='dummy1' style={{width:300,height:300,backgroundColor:"black"}} >
              <h1>{food.id}</h1>
              <h1>{food.name}</h1>
            </div>
          )}
    
          </div>
        )}; 
      };

