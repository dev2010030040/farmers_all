"use client"
import { NavBar } from '@/components';
import Link from 'next/link';
import Lottie from "lottie-react";
import opm from '../../public/hpNMreBNXE.json';

export default function Home() {

  const options = {
    animationData: opm,
    loop: true
  };



  return (
    <main className='p-10'>
     <NavBar />

     <div className='grid grid-cols-2 justify-evenly py-[10rem]'>
        <div className='px-10'>
          <div className='font-extrabold text-3xl mb-10'>
            <h1 className=''>Without <span className='text-green'>Farmers</span>, </h1> 
            <h1 className='pt-[1rem]'>no <span className='text-green'>Country</span> can progress.</h1>
          </div>
        
          <Link className='bg-green p-5 text-white rounded-xl' href={'/'}>Explore</Link>
        </div>
        <div className='px-10 flex '>
          <p className='p-10 text-white bg-green rounded-[4rem] w-9/12'>
          PaddyTrack is a one-of-a-kind digital solution developed by a team of experts with a deep passion for agriculture. We bring together cutting-edge technology and valuable insights to help Telangana's farmers thrive. With a strong commitment to promoting sustainable agriculture and modern farming practices, we are here to serve the needs of our farming community.
          </p>
        </div>
     </div>
       <Lottie animationData={opm} loop={true} className='absolute bottom-0 w-[97%] r'/>
    </main>
  )
}
