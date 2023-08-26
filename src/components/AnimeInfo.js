import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfoCard from './InfoCard';
import EpisodeCard from './EpisodeCard';
import { Link } from 'react-router-dom';


function AnimeInfo() {
 const {id} = useParams();
 const [episodeNo , setEpisodeNo] = useState([]);
 const [info, setInfo] = useState({});

 async function getAnimeInfo(){
    const data = await fetch("https://api.consumet.org/anime/gogoanime/info/" + id);
    const json = await data.json();
    console.log(json);
    setEpisodeNo(json.episodes);
    setInfo(json);
 }
 useEffect(()=>{
    getAnimeInfo();
 },[])
  return (
    <div className='h-screen bg-gray-800 items-center content-center py-36 h-full'>
      
      
        <InfoCard {...info} />
        <h1 className='block my-3 text-white mx-5 my-3'>Episodes : </h1>
        <div className='flex flex-wrap  bg-gray-800 text-white px-5 h-auto'>
       
        <br />
       {
          (episodeNo.length == 0)? <h1>Loading...</h1>:
          episodeNo.map((ep)=>{
              return <Link to={"/watch/" + ep.id}> <EpisodeCard {...ep} key={ep.id} /></Link>
          }
          )
       }
          
        </div>

    </div>
  )
}

export default AnimeInfo