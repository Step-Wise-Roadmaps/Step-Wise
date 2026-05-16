import { UserSearch } from "lucide-react";

function SearchBar({ search, setSearch }) {

    return (
        <div className='flex items-center justify-end'>
            
            <div className='relative flex items-center'>

                <input
                    type="text"
                    placeholder='Search users...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-64 rounded-xl border border-slate-300 bg-white p-2 pl-4 pr-10 shadow-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                />

                <label className='absolute right-3 text-slate-400'>
                    <UserSearch size={20} />
                </label>

            </div>

        </div>
    );
}

export default SearchBar;