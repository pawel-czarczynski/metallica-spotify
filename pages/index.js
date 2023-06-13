import Head from 'next/head'
import { useEffect, useState } from 'react';

import SideBar from '@/components/SideBar'
import Center from '@/components/Center'



export default function Home({albums}) {
  const [currentAlbum, setCurrentAlbum] = useState(3)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex h-screen bg-black overflow-y-hidden'>        
        <SideBar all_albums = {albums} setCurrentAlbum={setCurrentAlbum}/>
        <Center currentAlbum={currentAlbum} />  
        {console.log('main:',currentAlbum)}    
      </main>
    </>
  )
}

export async function getStaticProps(){
 
  const response = await fetch("http://127.0.0.1:8000/metallica/albums/")
  const data = await response.json()

  return{
    props:{
      albums: data.data,
    },
  }
}