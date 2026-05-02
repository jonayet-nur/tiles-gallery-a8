'use client'

import Link from "next/link"
import {Bars} from '@gravity-ui/icons';

const Navbar = () => {
   
  return (
    

<div className="navbar bg-base-100 shadow-sm">
      <div className="w-11/12 max-w-7xl mx-auto flex justify-between items-center">

        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
             <span><Bars></Bars></span>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li><Link href="/">Home</Link></li>
              <li><Link href="/alltiles">All Tiles</Link></li>
              <li><Link href="/">My Profile</Link></li>
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className=" text-3xl font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            TileGallery
          </Link>
        </div>

        {/* CENTER (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex  justify-center items-center gap-6">
            <li><Link href="/" className=" font-bold  bg-linear-to-br from-[#0f172a] via-[#111827] to-[#020617] bg-clip-text text-transparent">Home</Link></li>
            <li><Link href="/alltiles" className=" font-bold  bg-linear-to-br from-[#0f172a] via-[#111827] to-[#020617] bg-clip-text text-transparent">All Tiles</Link></li>
            <li><Link href="/" className=" font-bold  bg-linear-to-br from-[#0f172a] via-[#111827] to-[#020617] bg-clip-text text-transparent">My Profile</Link></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end flex gap-3  ">
          <Link href="/login" className="btn btn-outline btn-sm">
            Login
          </Link>
          <Link href="/register" className="btn btn-primary btn-sm">
            Register
          </Link>
        </div>

      </div>
    </div>


    
  )
}

export default Navbar