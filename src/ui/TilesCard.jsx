// import Image from 'next/image'
// import React from 'react'

// const TilesCard = ({tiles}) => {
//   return (
//     <div className='w-11/12 mx-auto'>
//         <div className="card bg-base-100  shadow-sm">
//   <figure className="">
  

//       <Image src={tiles.image} alt={tiles.title} width={200}
//     height={200}></Image>
    
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">{tiles.title}</h2>
//     <p></p>
//     <div className="card-actions">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }

// export default TilesCard




import Image from 'next/image'
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

        {/* Content */}
        <div className="card-body flex flex-col justify-between items-center text-center p-4">
            <h2 className="text-xl font-semibold">{tiles.material}</h2>
          <h2 className=" text-xl font-bold">{tiles.title}</h2>

          <div className="flex justify-between gap-8 items-center pt-2">
            <h2 className='text-xl font-semibold'>$ {tiles.price}</h2>
            <button className="btn rounded-2xl btn-outline btn-accent">View Details</button>
          </div>

       
        </div>

      </div>
    </div>
  )
}

export default TilesCard