import React from 'react'

function EpisodeCard({number}) {
  return (
    <div className='border-black bg-yellow-600 text-white mx-5 my-3 px-6'>
        <h1>{number}</h1>
    </div>
  )
}

export default EpisodeCard