
// import tilesData from '@/data'
// import React, { useState } from 'react'

// const TilesDetailsPage =async ({params}) => {
//     const {tilesId} = await params
//     const data = await tilesData();
//     const tiles  =  data.find(tile => tile.id == tilesId)
//     // const [isWishlisted, setIsWishlisted] = useState(false);
//   return (
//     <div>TilesDetailsPage
//         <h2>{tiles.title}</h2>

//         <div className="max-w-7xl mx-auto px-4 py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
//         {/* Left - Image */}
//         <div className="relative group">
//           <div className="overflow-hidden rounded-3xl shadow-xl bg-gray-50">
//             <Image
//               src={product.image}
//               alt={product.title}
//               width={800}
//               height={800}
//               className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
//               priority
//             />
//           </div>

//           {/* Category Badge */}
//           <div className="absolute top-6 left-6">
//             <span className="px-5 py-2 bg-white/95 backdrop-blur-md text-sm font-semibold text-gray-700 rounded-2xl shadow">
//               {product.category}
//             </span>
//           </div>
//         </div>

//         {/* Right - Details */}
//         <div className="space-y-8">
//           <div>
//             <p className="uppercase tracking-widest text-blue-600 font-medium text-sm mb-2">
//               {product.category}
//             </p>
//             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//               {product.title}
//             </h1>
//             <p className="mt-3 text-gray-500">
//               Designed by <span className="text-gray-700 font-medium">{product.creator}</span>
//             </p>
//           </div>

//           {/* Price */}
//           <div className="flex items-center gap-4">
//             <span className="text-4xl font-semibold text-gray-900">
//               {product.currency} {product.price.toFixed(2)}
//             </span>
//             {product.inStock ? (
//               <span className="px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-2xl flex items-center gap-1.5">
//                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//                 In Stock
//               </span>
//             ) : (
//               <span className="px-4 py-1.5 bg-red-100 text-red-700 text-sm font-medium rounded-2xl">
//                 Out of Stock
//               </span>
//             )}
//           </div>

//           {/* Specifications */}
//           <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
//             <h3 className="text-xl font-semibold mb-6">Specifications</h3>
//             <div className="grid grid-cols-2 gap-y-6 text-sm">
//               <div>
//                 <p className="text-gray-500">Material</p>
//                 <p className="font-semibold text-gray-800">{product.material}</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Dimensions</p>
//                 <p className="font-semibold text-gray-800">{product.dimensions}</p>
//               </div>
//             </div>
//           </div>

//           {/* Description */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">About this Style</h3>
//             <p className="text-gray-600 leading-relaxed text-[17px]">
//               {product.style_description}
//             </p>
//             {product.description && (
//               <p className="mt-4 text-gray-600 leading-relaxed">
//                 {product.description}
//               </p>
//             )}
//           </div>

//           {/* Tags */}
//           <div>
//             <h3 className="font-medium mb-3 text-gray-700">Tags</h3>
//             <div className="flex flex-wrap gap-2">
//               {product.tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className="px-4 py-2 text-xs bg-white border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-colors"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="pt-6 flex flex-col sm:flex-row gap-4">
//             <button
//               disabled={!product.inStock}
//               className="flex-1 bg-gray-900 hover:bg-black disabled:bg-gray-400 text-white font-semibold py-4 rounded-2xl transition-all active:scale-95"
//             >
//               {product.inStock ? 'Add to Cart' : 'Notify Me'}
//             </button>

//             <button
//               onClick={() => setIsWishlisted(!isWishlisted)}
//               className="flex-1 border-2 border-gray-300 hover:border-gray-400 font-semibold py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
//             >
//               {isWishlisted ? '❤️' : ''} Wishlist
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default TilesDetailsPage






import tilesData from '@/data'
import Image from 'next/image'
import Link from 'next/link'
 // client component 

const TilesDetailsPage = async ({ params }) => {
  const { tilesId } = await params
  const data = await tilesData()
  const tiles = data.find(tile => tile.id == tilesId)

  if (!tiles) {
    return <div className="text-center py-20 text-gray-500">Tile not found.</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left - Image */}
        <div className="relative group">
          <div className="overflow-hidden rounded-3xl shadow-xl bg-gray-50">
            <Image
              src={tiles.image}
              alt={tiles.title}
              width={800}
              height={800}
              className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
              priority
               loading="eager" 
            />
          </div>
          <div className="absolute top-6 left-6">
            <span className="px-5 py-2 bg-white/95 backdrop-blur-md text-sm font-semibold text-gray-700 rounded-2xl shadow">
              {tiles.category}
            </span>
          </div>
        </div>

        {/* Right - Details */}
        <div className="space-y-8">
          <div>
            <p className="uppercase tracking-widest text-blue-600 font-medium text-sm mb-2">
              {tiles.category}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {tiles.title}
            </h1>
            <p className="mt-3 text-gray-500">
              Designed by <span className="text-gray-700 font-medium">{tiles.creator}</span>
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-4xl font-semibold text-gray-900">
              {tiles.currency} {tiles.price?.toFixed(2)}
            </span>
            {tiles.inStock ? (
              <span className="px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-2xl flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                In Stock
              </span>
            ) : (
              <span className="px-4 py-1.5 bg-red-100 text-red-700 text-sm font-medium rounded-2xl">
                Out of Stock
              </span>
            )}
          </div>

          {/* Specifications */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-6">Specifications</h3>
            <div className="grid grid-cols-2 gap-y-6 text-sm">
              <div>
                <p className="text-gray-500">Material</p>
                <p className="font-semibold text-gray-800">{tiles.material}</p>
              </div>
              <div>
                <p className="text-gray-500">Dimensions</p>
                <p className="font-semibold text-gray-800">{tiles.dimensions}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About this Style</h3>
            <p className="text-gray-600 leading-relaxed text-[17px]">
              {tiles.style_description}
            </p>
            {tiles.description && (
              <p className="mt-4 text-gray-600 leading-relaxed">
                {tiles.description}
              </p>
            )}
          </div>

          {/* Tags */}
          {tiles.tags?.length > 0 && (
            <div>
              <h3 className="font-medium mb-3 text-gray-700">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tiles.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-xs bg-white border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <button
              disabled={!tiles.inStock}
              className="flex-1 bg-gray-900 hover:bg-black disabled:bg-gray-400 text-white font-semibold py-4 rounded-2xl transition-all active:scale-95"
            >
              {tiles.inStock ? 'Add to Cart' : 'Not Available'}
            </button>

            
          </div>
        </div>

      </div>
    </div>
  )
}

export default TilesDetailsPage