import React from 'react'



function Card({image , title}) {

 function truncate(str){
    return str.length > 30 ? str.substring(0, 30) + "..." : str;
 }

  return (
    <div className='w-56 h-[26rem] p-6 m-2  bg-gray-500 text-white shadow-lg hover:bg-gray-600 hover:shadow-2xl rounded-md'>
         <img src={image}></img>
            <h2 className="font-bold text-xl">{truncate(title)}</h2>
            <h3>Anime</h3>

    </div>
  )
}

export default Card;