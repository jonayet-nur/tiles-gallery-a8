'use client'
import { UpdateProfileModal } from '@/Components/UpdateProfileModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';


const ProfilePage = () => {
    const userData = authClient.useSession();
       const user = userData.data?.user

      
  return (
   <>

   <div className="flex justify-center my-10">
  <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg p-6 transition-all hover:shadow-xl">
    
    <div className="flex flex-col items-center gap-4 p-8">
      
      {/* Avatar Section */}
     
       
        
        <Avatar className="h-20 w-20 ">
          <Avatar.Image 
            alt={user?.name} 
            src={user?.image} 
            referrerPolicy="no-referrer" 
          />
          <Avatar.Fallback className="text-xl font-bold bg-slate-100 dark:bg-slate-800">
            {user?.name?.[0]}
          </Avatar.Fallback>
        </Avatar>
     

      {/* User Info */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
          {user?.name || "User Name"}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {user?.email || "user@example.com"}
        </p>
      </div>

      {/* Action Button */}
      
    
    <UpdateProfileModal></UpdateProfileModal>
    </div>
  </div>
</div>
   </>
  )
}

export default ProfilePage