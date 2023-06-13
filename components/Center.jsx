import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import DisplayAlbums from './DisplayAlbums';



function Center({ currentAlbum }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response_song = await fetch(`https://metallica-spotify-api.onrender.com/metallica/songs/${currentAlbum}`);
        const data_song = await response_song.json();
        setSongs(data_song);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, [currentAlbum]);

  return (
    <div className='w-full border'>
      <Banner />
      <DisplayAlbums songs= {songs} />
    </div>
  );
}

export default Center;
