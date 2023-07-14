import React from 'react'
import { Link,useParams } from 'react-router-dom'
import { HotelData } from './RData'
const SingleMenu = () => {
const {hotelId} = useParams();

const hotel = HotelData.find((hotel) => hotel.id === hotelId);
const{img,desc} = hotel;

return(
    <section className='section menu'>
    <br></br><br></br>
    <br></br>
    <img src={img}></img>
     <h4 style={{color:"black"}} >{desc}</h4>
     <Link to="/restaurants">back</Link>
    </section>

    {HotelData.map((hotel) =>(

         <div key = {hotel.id}>
         <h1 style={{color:"black"}} >{hotel.name}</h1>
         <h1 style={{color:"black"}} >{hotel.desc}</h1>
         </div>

    ))} 
)
}

export default SingleMenu;
