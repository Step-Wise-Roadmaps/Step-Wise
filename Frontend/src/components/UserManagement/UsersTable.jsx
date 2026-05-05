
import UserRow from "./UserRow";
import TableHeader from "./TableHeader";
import SearchBar from "./SearchBar";

function UsersTable({ users, isLoading }) {
  return (
    <div className='mx-auto flex w-full max-w-7xl flex-col gap-6 p-4 pt-20 md:p-6 md:pt-6 lg:p-8'>
      <div className='w-full max-w-7xl bg-white relative rounded-3xl p-8 md:p-10 lg:p-12'>

        <SearchBar />

        <div className='mt-5 md:mt-3'>
          <h4 className='roboto-bold text-xl md:text-3xl'>All Stap-Wise Users</h4>
        </div>

        <div className='relative mt-5 w-full'>
          <div className='overflow-x-auto'>
            <div className='p-4 md:p-6 min-w-[1120px] border rounded-2xl'>

              <TableHeader />

              {/* 🔥 Dynamic rows */}
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                users?.map((user) => (
                  <UserRow key={user.id} user={user} />
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