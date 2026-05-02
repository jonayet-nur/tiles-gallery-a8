
'use client'
import { useState } from 'react'

const WishlistButton = () => {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <button
      onClick={() => setIsWishlisted(!isWishlisted)}
      className="flex-1 border-2 border-gray-300 hover:border-gray-400 font-semibold py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
    >
      {isWishlisted ? '🎉' : '❤️'} Wishlist
    </button>
  )
}

export default WishlistButton