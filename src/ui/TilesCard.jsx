
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TilesCard = ({ tiles }) => {
  return (
    <div className='w-11/12 mx-auto'>
      <div className="card bg-base-100 shadow-md h-[350px] flex flex-col">

        {/* Image */}
        <figure className="px-4 pt-4">
          <Image
            src={tiles.image}
            alt={tiles.title}
            width={300}
            height={200}
            className="rounded-xl object-cover h-[150px] w-full"
          />
        </figure>

        {/* new */}
         <div className="absolute top-9 left-9">
            <span className="px-4 py-2 bg-white/95 backdrop-blur-md text-sm font-semibold text-gray-700 rounded-2xl shadow">
              {tiles.category}
            </span>
          </div>

        {/* Content */}
        <div className="card-body flex flex-col justify-between items-center text-center p-4">
            <h2 className="text-xl font-semibold">{tiles.material}</h2>
          <h2 className=" text-xl font-bold">{tiles.title}</h2>

          <div className="flex justify-between gap-8 items-center pt-2">
            <h2 className='text-xl font-semibold'>${tiles.price}</h2>
           <Link href={`/alltiles/${tiles.id}`}> <button className="btn rounded-2xl btn-outline btn-accent">View Details</button></Link>
          </div>

       
        </div>

      </div>
    </div>
  )
}

export default TilesCard