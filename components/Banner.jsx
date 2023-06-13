import React from 'react'

function Banner() {
  return (
    <div className='flex-grow h-[22vh] bg-gradient-to-b to-black from-red-800 w-full border'>
        <div className='flex items-baseline justify-center'>
          <img
            className='w-1/3 h-[20vh] p-5'
            src="https://www.metallica.com/on/demandware.static/-/Sites/default/dw83d2c4ce/images/logos/logo-homepage.svg"
            alt="image from official metallica site"
          />
          <h1 className='text-gray-200 text-xl'>...because Nothing Else Matters</h1>
        </div>
      </div>
  )
}

export default Banner