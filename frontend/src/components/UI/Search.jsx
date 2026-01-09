import React from 'react'
import { FaLink } from 'react-icons/fa'
import { TiSortAlphabetically } from "react-icons/ti";

const Search = () => {
  return (
    <form action="" className=''>
    <div
    className=' flex border-3 flex-grow border-gray-500 py-1 pl-3 pr-1 rounded-full justify-between gap-2'>
        <div
        className='text-white flex items-center gap-2 w-full'
        >
            <label htmlFor=""><FaLink/></label>
            <input type="text" name="link" placeholder='enter or paste your link' 
            className='text-white focus:outline-none w-full' required/>
        </div>
        <button type='submit' 
        className='text-white bg-primary py-2 px-3 rounded-full shadow-[0px_0px_8px_rgb(99_88_220)]'>
            Shorten
        </button>
    </div>
    <div>
        <div
        className='border-2 border-gray-400 py-3 px-2 mt-5 rounded-full flex items-center gap-2'
        >
            <label htmlFor="">
                <TiSortAlphabetically className='w-6 h-6 text-white'/>
            </label>
            <input type="text" placeholder='enter shorten keyword (optional)' 
            className='w-full text-white outline-none'
            />
        </div>
    </div>
    </form>
  )
}

export default Search