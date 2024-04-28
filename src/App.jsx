import { useEffect, useState } from 'react'

import './App.css'
import Footer from './Footer';

function App() {
  const [tracks,setTracks]=useState([]);
  const[url,setUrl]=useState("")
  const [key,setKey]=useState("trend")
 //function to fetch songs

  async function getTracks(){
    let data =await fetch(`https://v1.nocodeapi.com/akash309/spotify/iTWfztixHGcibTuN/search?q=${key}&type=track`)
    let converetedData=await data.json();
    //setting tracks
   setTracks(converetedData.tracks.items)
   //seting url by default
   setUrl(converetedData.tracks.items[0].preview_url);
      
  }
  //api call on load
     useEffect(()=>{
     getTracks().then((res)=>{
     })

     },[])

 

  return (
    <div>
   {/* SearchBar    */}

  <div className='navBar bg-slate-600 p-2 flex justify-around'>
    <div className="logo">
    <a href="https://flowbite.com" className="flex items-center">
  <img
    src="https://flowbite.com/docs/images/logo.svg"
    className="mr-3 h-6 sm:h-9"
    alt="Flowbite Logo"
  />
  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
    Gaana
  </span>
</a>

    </div>
  <div className=" searchBar flex items-center max-w-lg mx-auto w-2/4">
  <label htmlFor="voice-search" className="sr-only">
    Search
  </label>
  <div className="relative w-full">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 21 21"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
        />
      </svg>
    </div>
    <input
   
    onChange={(evt)=>{setKey(evt.target.value)}}
      type="text"
      id="voice-search"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search Songs..."
      required=""
    />
    <button
      type="button"
      className="absolute inset-y-0 end-0 flex items-center pe-3"
    >
      <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
        />
      </svg>
    </button>
  </div>
  <button onClick={getTracks}
    type="submit"
    className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <svg
      className="w-4 h-4 me-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
    Search
  </button>
</div>

  </div>
<div className="playsong flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 ...">
<PlaySong url={url}></PlaySong>
</div>
      {/* Showing song card */}
      <div className='Song-Show grid grid-cols-4 bg-gradient-to-r from-cyan-500 to-blue-500 ...'>
        {
       tracks.map(track=>{
        return  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
        <a href="#">
          <img className="rounded-t-lg" src={track.album.images[0].url} alt="image" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             {track.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Artist: {track.album.artists[0].name}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Released On: {track.album.release_date}
          </p>
          <a onClick={()=>{setUrl(track.preview_url); ;
}} href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <p className='mr-2' >Play Song</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
</svg>


          </a>
        </div>
      </div>

       })
        }
      </div>
   <Footer></Footer>
    </div>
  )
}


function PlaySong(props){
  
const permision=true;
  return <div className='p-2'>
    <audio id='audio' src={props.url} controls autoPlay={permision} >
    </audio>
  </div>
}


function Cards(props){

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src={props.image} alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in
      reverse chronological order.
    </p>
    <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>

  )
}

export default App
