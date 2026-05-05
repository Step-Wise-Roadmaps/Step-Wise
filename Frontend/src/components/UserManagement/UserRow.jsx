
import { Trash2 } from "lucide-react";

function UserRow({ user }) {
  return (
    <div className='relative p-4 md:p-6 grid grid-cols-7 items-center gap-4'>
      
      <div className='col-span-2 flex items-center gap-1'>
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white">
          {user.full_name?.slice(0,2).toUpperCase()}
        </div>
        <p className='text-xl'>{user.full_name}</p>
      </div>

      <p className='col-span-2'>{user.email}</p>
      <p>{user.skill}</p>
      <p>{user.enrolled ? "True" : "False"}</p>
      <p>{user.role}</p>

      <div className='flex absolute right-1 text-rose-600 cursor-pointer'>
        <Trash2 size={20} />
        <button>Delete</button>
      </div>

    </div>
  );
}

export default UserRow;