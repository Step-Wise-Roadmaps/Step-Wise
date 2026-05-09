import { UserSearch } from "lucide-react";

function SearchBar() {
  return (
    <div className='flex items-center justify-end'>
      <div className='relative flex items-center'>
          <input type="text" placeholder='Search' className='p-2 md:px-5 border border-slate-400 rounded-xl shadow-md outline-hidden' />
          <label className='absolute right-3 cursor-pointer text-slate-400'><UserSearch size={20} /></label>
      </div>
    </div>
  );
}

export default SearchBar;