import Banner from '@/components/Banner'
import React from 'react'
import { Radar, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    CategoryScale,
    PointElement,
    LineElement,
    LinearScale,
    BarElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import Link from 'next/link';
import { BackwardIcon, ForwardIcon, HomeIcon } from '@heroicons/react/24/solid';

ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  BarElement,
  Filler,
  Tooltip,
  Legend
);

export default function songID({details, lyrics}) {
    const data = {
        labels: ['Danceability', 'instrumentalness', 'valence', 'acousticness', 'energy', 'liveness', 'speechiness'],
        datasets: [
          {
            label: details.name,
            data: [details.song_stats[0].danceability, details.song_stats[0].instrumentalness, details.song_stats[0].valence, details.song_stats[0].acousticness, details.song_stats[0].energy, details.song_stats[0].liveness, details.song_stats[0].speechiness],
            backgroundColor: 'rgba(255, 0, 0, 0.7)',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
            
          },
        ],        
      };
      const chartOptions = {
        scales: {
          r: {
            angleLines: {
              color: 'rgba(255, 255, 255, 1)', // Change the color of the angle lines
            },
            grid: {
                color: 'rgba(255, 255, 255, 0.5)', // Customize the color of grid lines
            },
            pointLabels: {
              color: 'rgba(255, 255, 255, 1)', // Change the color of the point labels
              fontSize: 1,
            },
            ticks: {
              backdropColor: 'rgba(0, 0, 0, 0)', // Change the backdrop color of the ticks
              color: 'rgba(255, 255, 255, 1)', // Change the color of the tick labels
            },
          },
        },
      };

      const barChartData = {
        labels: ['Song Stats'],
        datasets: [
          {
            label: 'loudness',
            data: [details.song_stats[0].loudness],
            backgroundColor: 'red',
            borderColor: 'rgba(75, 192, 192, 1)',
          },
          {
            label: 'tempo',
            data: [details.song_stats[0].tempo],
            backgroundColor: 'green',
            borderColor: 'rgba(75, 192, 192, 1)',
          },
          {
            label: 'popularity',
            data: [details.song_stats[0].popularity],
            backgroundColor: 'blue',
            borderColor: 'rgba(75, 192, 192, 1)',
          },
        ],
      };
      
      const barChartOptions = {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      };
  return (
    <div className='justify-items-center h-screen overflow-y-hidden'>       
        <Banner />
        
        <div className='flex flex-col items-center w-full h-full text-white bg-black'>
      
        <h1 className='text-2xl pb-10'>{details.name}</h1>
           
            <div className='grid grid-cols-3 w-[90vw] h-[50vh] justify-self-center align-middle'>
                <div className="flex justify-center h-[50vh]">
                    <Radar data={data} options={chartOptions}/>
                </div>
                <div className="flex justify-center h-[50vh]">
                    <Bar data={barChartData} options={barChartOptions} />
                </div>
                <div className='overflow-scroll no-scrollbar'>
                  <pre>{lyrics}</pre>            
                </div>
            </div>
            <div className='grid grid-cols-3 w-[50vw] items-center p-10'>              
                <Link href={`/Songs/${details.id-1}`}>
                    <div className="flex justify-center">
                        <BackwardIcon className="h-10 w-10 text-white" />
                    </div>
                </Link>
                <Link href={`/`}>
                    <div className="flex justify-center">
                        <HomeIcon className='h-10 w-10 text-white justify-self-center' />
                    </div>
                </Link>
                <Link href={`/Songs/${details.id+1}`}>
                    <div className="flex justify-center">
                        <ForwardIcon  className='h-10 w-10 text-white justify-self-center' />
                    </div>
                </Link>
            </div>
           
        </div>        
    </div>
  )
}

export async function getServerSideProps(context){
    
    const songID =  context.params.songID
    const response = await fetch(`http://127.0.0.1:8000/metallica/song_l/${songID}`)
    let data = await response.json()

    return {
      props: {
        details: data[0],
        lyrics: data[1].lyrics
      }
    }
  }