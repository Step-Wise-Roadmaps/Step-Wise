
import UserRow from "./UserRow";
import TableHeader from "./TableHeader";
import SearchBar from "./SearchBar";

function UsersTable({ users, isLoading, deleteUser }) {

  return (
    <div className='mx-auto flex w-full max-w-7xl flex-col gap-6 p-4 pt-20 md:p-6 md:pt-6 lg:p-8'>
      <div className='w-full max-w-7xl bg-white relative rounded-3xl p-8 md:p-10 lg:p-12'>
        <div className='absolute rounded-3xl inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.16),_transparent_20%),radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_18%)]' />
        <SearchBar />

        <div className='mt-5 md:mt-3'>
          <h4 className='roboto-bold text-xl leading-tight text-slate-900 md:text-3xl'>All Stap-Wise Users</h4>
        </div>

        <div className='relative mt-5 w-full'>
          <div className='overflow-x-auto'>
            <div className='p-4 md:p-6 min-w-[1120px] border border-slate-200 rounded-2xl shadow-[0_24px_80px_rgba(15,23,42,0.08)]'>

              <TableHeader />

              {isLoading ? (
                <p>Loading...</p>
              ) : (
                users?.map((user) => (
                  <UserRow key={user.id} user={user} deleteUser={deleteUser} />
                ))
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UsersTable;