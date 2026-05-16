
import { Trash2 } from "lucide-react";

function UserRow({ user, deleteUser }) {
  return (
    <div className='relative p-4 md:p-6 grid grid-cols-7 items-center gap-4'>
      <div className='col-span-2 flex items-center gap-1'>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-sm roboto-bold text-white">
          {user.full_name?.slice(0,2).toUpperCase()}
        </div>
        <div>
          <p className='text-lg roboto-medium text-slate-900 cursor-pointer'>{user.full_name}</p>
          <p className="pl-1 roboto-extralight text-slate-900 text-xs">{new Date(user.created_at).toLocaleDateString()}</p>
        </div>
      </div>

      <p className='col-span-2 text-slate-900 roboto-regular'>{user.email}</p>
      <p className="text-slate-900 roboto-regular">{user.skill_name}</p>
      <div>
        <span className={`rounded-full px-3 py-1 text-xs roboto-medium ${
          user.enrolled
          ? "bg-emerald-100 text-emerald-700"
          : "bg-rose-100 text-rose-700"
        }`}>
           {user.enrolled ? "Enrolled" : "Not Enrolled"}
        </span>
      </div>

      <p className="text-slate-900 roboto-regular">{user.role}</p>

      <div className='flex absolute right-1 items-center text-rose-600 border border-transparent hover:border-rose-200 hover:bg-rose-50 px-3 py-2 cursor-pointer rounded-lg transition-all duration-300'>
        <Trash2 size={20} />
        <button onClick={() => {
          deleteUser(user.id);
        }}
          className="cursor-pointer">
            Delete
        </button>
      </div>

    </div>
  );
}

export default UserRow;