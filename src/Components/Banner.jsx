'use client'
import Link from 'next/link'
import React from 'react'
import {ArrowRight} from '@gravity-ui/icons';

const Banner = () => {
  return (
    <div className='w-11/12 mx-auto mt-6'>
        <div
  className="hero min-h-screen rounded-2xl"
  style={{
    backgroundImage:
     "url('/assets/banner-img1.jpg')",
      backgroundSize: "contain",
    backgroundPosition: "center"
  }}
>
  <div className=""></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold animate__animated animate__pulse  animate__infinite" style={{ animationDuration: "2s" }}>Discover Your <span className='text-orange-500' >Perfect Aesthetic</span></h1>
      <p className="mb-5">
      From hand-glazed ceramics to ancient zellige — explore the worlds most extraordinary tiles.
      </p>
     <Link href=""><button className="bg-[#e31b61ed] text-white px-6 py-4 inline-flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300  rounded-2xl"><span>Browse Now </span><ArrowRight className='' ></ArrowRight> </button> </Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner


