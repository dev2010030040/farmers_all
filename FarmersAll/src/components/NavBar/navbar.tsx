import React from 'react';
import Link from "next/link";

const navbar = () => {
  return (
      <div className='grid grid-flow-col'>
        <h1 className='col-start-1 text-2xl text-start font-extrabold'>FarmersAll</h1>
        <div className='flex justify-evenly items-center'>
            <Link href={'/'} className='hover:text-green font-semibold'>Home</Link >
            <Link href={'http://127.0.0.1:5000/cultivation-analysis'} className='hover:text-green font-semibold'>Land Analysis</Link >
            <Link href={'/opms'} className='hover:text-green font-semibold'>OPMS</Link >
            <Link href={'http://127.0.0.1:5000/cultivation-analysis'} className='hover:text-green font-semibold'>SPI</Link >
            <Link href={'http://127.0.0.1:5000/stages-analysis'} className='hover:text-green font-semibold'>Detect Stages</Link >
            <Link href={'http://127.0.0.1:5000/rice-identifier'} className='hover:text-green font-semibold'>Rice Identifier</Link >
            <Link href={'/blogs'} className='hover:text-green font-semibold'>Blogs</Link >
            <Link href={'/contact'} className='hover:text-green font-semibold'>Contact</Link >
        </div>
    </div>
  )
}

export default navbar;