import React from 'react'

function EpisodeCard({number}) {
  return (
    <div className=' bg-yellow-600 text-white h-[30px] w-[70px] inline-grid text-center rounded-md'>
        <h1>{number}</h1>
    </div>
  )
}

export default EpisodeCard