import React from 'react'

function InfoCard({image, title , releaseDate , description , subOrDub , status , otherName , totalEpisodes }) {
  return (
    <div className='flex border-2 border-white my-3 mx-3 py-2 px-2 rounded-md h-auto'>
        <div className='px-5 py-2 bg-gray-800 text-yellow-600 border-r-2 border-white'>
            <img src={image} alt={title} className='h-60 w-full object-contain' ></img>
            <h1>{title}</h1>
        </div>
        <div className='bg-gray-800 text-white  py-2 px-3'>
            <h2 className='text-green-500  inline'>Released on : </h2><h2 className='inline'>{releaseDate}</h2><br/>
            <p className='text-green-500 inline' >Description :</p><p className='inline-block'>{description}</p><br/>
            <h2 className='text-green-500  inline'>Sub/Dub  :</h2><h2 className='inline'>{subOrDub}</h2><br />
            <h2 className='text-green-500  inline'>Ongoing/Finished :</h2><h2 className='inline'>{status}</h2> <br />
            <h2 className='text-green-500  inline'>Other Names :</h2><h2 className='inline'>{otherName}</h2><br />
            <h2 className='text-green-500  inline'>Number of Episodes :</h2><h2 className='inline'>{totalEpisodes}</h2><br />
        </div>
    </div>
   
  )
}

export default InfoCard