import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { IoSearchCircleOutline } from 'react-icons/io5';

interface SearchProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({ 
  value, 
  onChange, 
  placeholder = "Search..." 
}) => {
  return (
    <div className='relative'>
      <input 
        type="search" 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full p-1 rounded-md outline-none px-2 border border-neutral-500'
      />
      <BiSearch className="absolute top-1/2 transform -translate-y-1/2 right-3" size={20} />
    </div>
  )
}

export default Search;
