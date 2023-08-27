import React, { useEffect, useState } from 'react'
import Card from './Card';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

function Body() {
    const[trendAnime , setTrendAnime] = useState([]);

    async function getMovies(){
      const data = await fetch("https://api.consumet.org/anime/gogoanime/top-airing")
      const json = await data.json();
      setTrendAnime(json.results);
      
    }

    useEffect(()=>{
      getMovies();
    },[]);

    console.log(trendAnime);
  return (
    <div className='bg-gray-900  min-h-screen h-full'>
    <div className='font-extrabold text-3xl text-white py-2 px-3'><h1>Top Airing</h1></div>
    <div className='flex flex-wrap'>
     
        {
          (trendAnime.length == 0)? <Shimmer />:
          trendAnime.map((anime)=>{
              return <Link to={"/anime/" + anime.id}> <Card {...anime} key={anime.id} /></Link>
          }
          )

        }

    </div>
    </div>
  )
}

export default Body;