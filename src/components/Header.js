import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Header() {
    const [searchTxt,setSearchTxt] = useState("");
    const navigate = useNavigate();
  return (
    <div className='py-2 bg-gray-950 flex justify-between'>
      <Link to={"/"}>
        <img src='https://i.ibb.co/BymKHHB/Screenshot-34.png' 
         className="h-28 pl-2"
        /></Link>
    <div className='my-4 mx-3'>
    <input type='text' className='p-2 my-2 mx-3' placeholder='Search Anime' value={searchTxt}
    onChange={(e)=>{setSearchTxt(e.target.value)}}
    />
    <button className='my-2 bg-yellow-600 p-3 rounded-md'
    onClick={
      ()=>{
        navigate("/search/" + searchTxt);
      }
    }
    > <i class="fa fa-search"></i></button>
    </div> 
        
    </div>
  )
}

export default Header;