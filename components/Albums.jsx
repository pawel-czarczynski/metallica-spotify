import React from 'react'

function Albums({albums, setCurrentAlbum}) {
  return (
    <div>
        <div 
        className='rounded-lg border-gray-800 p-2 m-1 hover:bg-gray-800'
        onClick={() => {
          setCurrentAlbum(albums.id);
          console.log(albums.id)
        }}
        >{albums.album_name}</div>
         
        
    </div>
  )
}

export default Albums

