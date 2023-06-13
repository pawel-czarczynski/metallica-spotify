import React from 'react'
import { CursorArrowRippleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    duration /=1000;
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;
  
    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";  
    if (hrs > 0) {
      ret += "" + hrs + " : " + (mins < 10 ? "0" : "");
    }  
    ret += "" + mins + " : " + (secs < 10 ? "0" : "");
    ret += "" + secs;  
    return ret;
  }

function DisplayAlbums({songs}) {
  return (
    <div className='w-full '>
      <div className='grid grid-cols-12 m-2 pl-3 items-center rounded-xl justify-self-start hover:bg-gray-900 cursor-pointer text-white'>
            <div className='justify-self-center'>More Info</div>
            <div className='col-span-8'>Title</div>
            <div className='col-span-2'>Duration</div>
            <div className=''>Listen on Spotify</div>
      </div>
      <div className='h-[70vh] pb-56 overflow-y-scroll no-scrollbar'>
        {songs ? (
          songs.map((song) => (
            <div key={song.id} className='grid grid-cols-12 m-2 pl-3 items-center rounded-xl justify-self-start hover:bg-gray-900 cursor-default text-white  '>
                <div className='justify-self-center'>
                  <Link href={`/Songs/${song.id}`}>
                  <CursorArrowRippleIcon 
                    className='h-8 w-8 text-green-700 hover:cursor-pointer justify-self-center' />
                  </Link>
                </div>
                <div className='col-span-8'>{song.name}</div>
                <div className='col-span-2'>{fancyTimeFormat(song.duration_ms)}</div>
                <div className='justify-end'><a href={song.uri}><img className=' col-span-2 justify-end' width={150} src="spotify.png" alt="Listen on Spotify" /> </a></div>              
            </div>
          ))
        ) : (
          <p>Loading songs...</p>
        )}
      </div>
      
    </div>
  )
}

export default DisplayAlbums