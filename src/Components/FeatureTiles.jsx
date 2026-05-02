// import React from 'react'

import TilesCard from "@/ui/TilesCard"

const FeatureTiles = ({data}) => {
    const fourtiles = data.slice(0,4)
  return (

   <>
    <h1 className="text-center text-3xl font-bold">Feautures Tiles</h1>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-15">
    {
        fourtiles.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)
    }
   </div>
   </>
  )
}

export default FeatureTiles