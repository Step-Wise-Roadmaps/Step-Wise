import { UserSearch } from "lucide-react";

function SearchBar() {
  return (
    <div className='flex justify-end'>
      <div className='relative'>
        <input type="text" placeholder='Search' className='p-2 border rounded-xl' />
        <UserSearch className="absolute right-3 top-2" />
      </div>
    </div>
  );
}

export default SearchBar;