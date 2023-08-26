import React, { useEffect , useState } from 'react'
import { useParams , Link } from 'react-router-dom'
import Shimmer from './Shimmer';
import Card from './Card';


function SearchResults() {
    const {querry} = useParams();
    const [searchResults , setSearchResults] = useState([]);

    async function getSearchResults(){
        const data = await fetch(`https://api.consumet.org/anime/gogoanime/${querry}?page=${1}`)
        const json = await data.json();
        setSearchResults(json.results);
        console.log(json);
    }
    useEffect(()=>{
        getSearchResults();
    },[querry])
  return (
    <div className='bg-gray-800'>
    <div className='font-extrabold text-3xl text-white py-2 px-3'><h1>Search Results</h1></div>
    <div className='flex flex-wrap'>
     
        {
          (searchResults.length == 0)? <Shimmer />:
          searchResults.map((anime)=>{
              return <Link to={"/anime/" + anime.id}> <Card {...anime} key={anime.id} /></Link>
          }
          )

        }

    </div>
    </div>
  )
}

export default SearchResults