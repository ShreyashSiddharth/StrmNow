import React from 'react'

function Footer() {
  return (

    <>
    <div d className='pt-2 bg-gray-950 text-white flex place-content-center font-mono text-m'>
       <img src='https://i.ibb.co/BymKHHB/Screenshot-34.png' 
         className="h-20 pl-2"
        />
       <h1 className='pt-9 border-white border-l-2 pl-3'>We do not host any of the content served.</h1> 
       
    </div>
    <div className='pt-2 pb-2 bg-yellow-600 flex place-content-center ' >
    <a href="https://github.com/ShreyashSiddharth/StrmNow" target="_blank" rel="noreferrer">
    <img src='https://i.ibb.co/m8T7Qyg/pngwing-com.png' 
         className="h-10"
        />
    </a>
    </div >
    </>
  )
}

export default Footer;