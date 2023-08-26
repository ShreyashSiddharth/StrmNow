import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';


function WacthEpisode() {
    const {epId} = useParams();
    console.log(typeof epId);
    const [url , setUrl] = useState("");
    const [downloadUrl, setDownloadUrl] = useState("");
    async function getStreamLink() {
        const data = await fetch("https://api.consumet.org/anime/gogoanime/watch/" +epId+"?server=vidstreaming");
        const json = await data.json();
        console.log(json);
        setUrl(json.sources[1].url);
        setDownloadUrl(json.download);
    }
    useEffect(()=>{
        getStreamLink();
    },[url]);
    console.log(url);
  return (
    
    <div className=' bg-gray-800 text-white height h-[82.9vh] flex flex-col content-center items-center'>
        <h1 className='font-bold text-lg pt-[3.2%]  text-yellow-600 inline'>You are watching :</h1><h1 className='inline'> {epId}</h1>
        
        <div className='relative pt-[1.2%] ml-[0%]'>
        <ReactPlayer 
        width='832px' height='468px'
         light={'https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg'} playing controls url={url} />
        </div>
    {/* <button 
    className='font-bold text-md mt-[3.2%] p-5 bg-green-500 rounded-md'
    onClick={()=>window.open(downloadUrl , "_blank")}>Download</button> */}
        
    </div>
  )
}

export default WacthEpisode;