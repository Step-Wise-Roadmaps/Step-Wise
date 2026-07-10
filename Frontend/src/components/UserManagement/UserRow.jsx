
import { Link } from "react-router-dom"
import { Trash2 } from "lucide-react";

function UserRow({ user, deleteUser }) {
  return (
    <div className="p-4 md:p-6 grid grid-cols-7 items-center gap-4 border-b border-slate-200 hover:bg-slate-50 transition-colors duration-200">
  <div className="col-span-2 flex items-center gap-3">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 text-sm roboto-bold text-white">
      {user.full_name?.slice(0, 2).toUpperCase()}
    </div>

    <div>
      <Link
        to={`/admin-dashboard/getUserDitail/${user.id}`}
        className="text-lg roboto-medium text-slate-900 hover:text-blue-500 duration-200"
      >
        {user.full_name}
      </Link>

      <p className="pl-1 roboto-extralight text-slate-500 text-xs">
        {new Date(user.created_at).toLocaleDateString()}
      </p>
    </div>
  </div>

  <p className="col-span-2 text-slate-700 roboto-regular">
    {user.email}
  </p>

  <p className="text-slate-700 roboto-regular">
    {user.skill_name}
  </p>

  <p className="text-slate-700 roboto-regular">
    {user.role}
  </p>

  <div className="flex justify-end">
    <button
      onClick={() => deleteUser(user.id)}
      className="flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-rose-600 hover:border-rose-200 hover:bg-rose-50 transition-all duration-300 cursor-pointer"
    >
      <Trash2 size={18} />
      Delete
    </button>
  </div>
</div>
  );
}

export default UserRow;