'use client'
// import {  SearchOpt } from '@/Components/SearchField'
import tilesData from '@/data'
import TilesCard from '@/ui/TilesCard'
import { Label, SearchField } from '@heroui/react'
import React, { useEffect, useState } from 'react'

const AllTilesPage = () => {
    // const data = await tilesData()

    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const loadData = async () => {
            const result = await tilesData();
            setData(result);
        };
        loadData();
    }, []);

    // Filter courses based on search query
    const filteredTiles = data.filter((d) =>
        d.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
  return (
    <>
    <h2 className='text-center text-2xl font-extrabold mt-4 bg-linear-to-br from-[#0f172a] via-[#111827] to-[#020617] bg-clip-text text-transparent'>AllTilesPage</h2>
     <div className='grid justify-center items-center mt-4'>
         {/* <SearchOpt></SearchOpt> */}

          <SearchField name="search">
                   
                    <SearchField.Group>
                        <SearchField.SearchIcon />
                        <SearchField.Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                             className="w-96" placeholder="Search..." />
                        <SearchField.ClearButton onClick={() => setSearchQuery('')} />
                    </SearchField.Group>
                </SearchField>
     </div>
    <div className='w-10/12 mx-auto my-12'>
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3'>
         {
        // data.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)
          filteredTiles.map(tile => <TilesCard key={tile.id} tiles={tile}></TilesCard>)
       } 
      </div>
    </div>
    </>
  )
}

export default AllTilesPage


