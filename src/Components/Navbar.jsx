'use client'

import Link from "next/link"
import {Bars} from '@gravity-ui/icons';
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
   const userData = authClient.useSession();
  
   const user = userData.data?.user
   console.log(user)
   const handleSignout = async()=>{
    await authClient.signOut();
   }
  return (
    

<div className="navbar bg-base-100 shadow-sm">
      <div className="w-11/12 max-w-7xl mx-auto flex justify-between items-center">

        {/* LEFT */}
        <div className="navbar-start ">
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
              <li><Link href="/profile">My Profile</Link></li>
               <Link href="/login" className="btn btn-outline btn-sm">
            Login
          </Link>
          <Link href="/signup" className="btn btn-primary btn-sm">
            Register
          </Link>
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className=" text-3xl font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ml-auto lg:ml-0  absolute lg:static right-8">
            TileGallery
          </Link>
        </div>

        {/* CENTER (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex  justify-center items-center gap-6">
            <li><Link href="/" className=" font-bold  bg-linear-to-br from-[#0f172a] via-[#111827] to-[#020617] bg-clip-text text-transparent">Home</Link></li>
            <li><Link href="/alltiles" className=" font-bold  bg-linear-to-br from-[#0f172a] via-[#111827] to-[#020617] bg-clip-text text-transparent">All Tiles</Link></li>
            <li><Link href="/profile" className=" font-bold  bg-linear-to-br from-[#0f172a] via-[#111827] to-[#020617] bg-clip-text text-transparent">My Profile</Link></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end hidden lg:flex gap-3 ">
         
         <div className="">
           {!user && <ul className="flex gap-3">
            <li> <Link href="/login" className="btn btn-outline btn-sm">
            Login
          </Link>
          </li>
          <li><Link href="/signup" className="btn btn-primary btn-sm">
            Register
          </Link></li>
           </ul>}
         </div>
          {
            user && <div className="flex gap-5 items-center">
              <Avatar size="sm">
        <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
      </Avatar>
            <Button onClick={handleSignout} size="sm" variant="danger">SignOut</Button>
            </div>
          }
        </div>

      </div>
    </div>


    
  )
}

export default Navbar