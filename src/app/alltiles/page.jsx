import {  SearchOpt } from '@/Components/SearchField'
import tilesData from '@/data'
import TilesCard from '@/ui/TilesCard'
import React from 'react'

const AllTilesPage =async () => {
    const data = await tilesData()
    
  return (
    <>
    <h2 className='text-center text-2xl font-extrabold mt-4 bg-linear-to-br from-[#0f172a] via-[#111827] to-[#020617] bg-clip-text text-transparent'>AllTilesPage</h2>
     <div className='grid justify-center items-center'>
         <SearchOpt ></SearchOpt>
     </div>
    <div className='w-10/12 mx-auto my-12'>
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3'>
         {
        data.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)
       } 
      </div>
    </div>
    </>
  )
}

export default AllTilesPage


