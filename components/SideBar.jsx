import React from 'react'
import {    
    CircleStackIcon,
    MusicalNoteIcon
  } from '@heroicons/react/24/outline'
  import {
    HomeIcon,
  } from '@heroicons/react/24/solid'
import Albums from './Albums'


  export default function Sidebar({all_albums, setCurrentAlbum}) {
   

    return (
      
    <div className='text-gray-500 p-3 pt-9 text-sm lg:text-base w-96  border-r border-b ' >        
      <div>    
            <button className="flex items-center space-x-2  hover:text-gray-100 cursor-pointer">
                <HomeIcon className='h-5 w-5' /><p>Home</p>
            </button>           
            <button className="flex items-center space-x-2 hover:text-gray-100 cursor-pointer">
                <CircleStackIcon className='h-5 w-5' /><p>Albums</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-gray-100 cursor-pointer">
                <MusicalNoteIcon className='h-5 w-5' /><p>All Songs</p>
            </button>
            <hr className='mt-5 mr-16 border border-gray-800'></hr>
        </div>
        <div className='overflow-y-scroll no-scrollbar h-screen'>
            {
            all_albums.map((album, index) => 
              <Albums albums={album} setCurrentAlbum={setCurrentAlbum} key={index} />)
            }
      
        </div>
           
   </div> 
  )
}

