// import React from 'react'

// function Songs({songs}) {
//   return (
//     <div className=' text-white '>
//         <div className='flex m-2 p-5 items-center justify-between rounded-xl hover:bg-gray-900 cursor-pointer'>
//             <p className=''>{songs[0].track_number}</p>
//             <p className=''>title</p>
//             <p className=''>length</p>
//             <p className=''>year</p>
//             <p className=''>title</p>
//             <p className=''>length</p>
//         </div>
//         <div className='flex m-2 p-5 items-center justify-between rounded-xl hover:bg-gray-900 cursor-pointer'>
//             <p className=''>1</p>
//             <p className=''>title</p>
//             <p className=''>length</p>
//             <p className=''>1</p>
//             <p className=''>title</p>
//             <p className=''>length</p>
//         </div>
//     </div>
//   )
// }

// export default Songs

// import React from 'react';

// function Songs({ songs }) {
//   return (
//     <div className='text-white'>
//       {songs.map((song) => (
//         <div
//           key={song.id}
//           className='flex m-2 p-5 items-center justify-between rounded-xl hover:bg-gray-900 cursor-pointer'
//         >
//           <p>{song.track_number}</p>
//           <p>{song.title}</p>
//           <p>{song.length}</p>
//           <p>{song.year}</p>
//           {/* Render any other song information here */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Songs;

// import React, { useEffect, useState } from 'react';
// import Songs from './Songs';

// function Center({ currentAlbum }) {
//   const [songs, setSongs] = useState([]);

//   useEffect(() => {
//     const fetchSongs = async () => {
//       const response = await fetch('http://127.0.0.1:8000/metallica/songs/3',
//       {
//         method: 'GET',
//         headers: new Headers({ 'Content-type': 'application/json'}),
//         mode: 'no-cors'
//       }
//       );
//       const data = await response;
//       setSongs('response');
//     };

//     fetchSongs();
//   }, [currentAlbum]);
//   console.log(songs)
//   return (
//     <div className='w-full border'>
//       <div className='flex-grow h-80 bg-gradient-to-b to-black from-red-800 w-full border'>
//         <div className='flex items-baseline justify-center'>
//           <img className='w-1/3 p-5' src="https://www.metallica.com/on/demandware.static/-/Sites/default/dw83d2c4ce/images/logos/logo-homepage.svg" alt="image from official metallica site" />
//           <h1 className='text-gray-200 text-xl'>...because Nothing Else Matters</h1>
//         </div>
//       </div>
//       <div>
//         {songs.map((song) => (
//           <div key={song.id} className='flex m-2 p-5 items-center justify-between rounded-xl hover:bg-gray-900 cursor-pointer'>
//             <p className=''>{song.track_number}</p>
//             <p className=''>{song.title}</p>
//             <p className=''>{song.length}</p>
//             <p className=''>{song.year}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Center;

