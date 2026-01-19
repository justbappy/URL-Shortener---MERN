
import React from 'react'
import { FaPen } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const LinksTable = ({
    links
}) => {

  return (
    <div
    className='w-full mx-auto mt-2'
    >
        <div
        className='hidden md:flex'
        >
            <table
            className='w-full table-fixed'
            >
                <thead
                className='bg-gray-50/20 border-b-2 border-gray-400'
                >
                    <tr
                    className='text-white'
                    >
                        <th>Short Links</th>
                        <th>Original Links</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody
                className=' text-white shadow-[#1a263f] shadow-xs' 
                >
                    {
                        links.map((link, index) => (
                            <tr key={index}>
                                <td>{link.original_link}</td>
                                <td>{link.shorten_link}</td>
                                <td>{link.createAt}</td>
                                <td>
                                <div className='flex justify-end items-center gap-2'>
                                    <button>
                                    <Link
                                    className='bg-yellow-800 text-yellow-300 px-3 py-1 rounded-full'
                                    > Update
                                    </Link>
                                    </button>
                                    <button>
                                        <Link
                                        className='flex gap-1 rounded-full py-2 px-2 bg-red-950'
                                        >  
                                            <MdDelete className='h-6 w-6 text-red-600'/>
                                        </Link>
                                    </button>
                                </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <div
        className='flex flex-col gap-3 md:hidden'
        >   
           {
            links.map((link, index) => (
                <div key={index} className='bg-gray-50/10 px-2 py-4'>
                    <div className='flex gap-1 justify-between mb-2'>
                        <Link
                        className='bg-yellow-700 flex gap-1 px-2 py-1 items-center rounded-full'
                        >
                            <FaPen className='text-yellow-500'/>
                            <span className='text-yellow-400 font-semibold'>Update</span>
                        </Link>
                        <Link>
                            <MdDelete className='text-red-600 h-6 w-6'/>
                        </Link>
                    </div>
                    <div className='w-full mb-2'>
                        <span className='text-white text-nowrap mr-1'>Shorten Link:</span>
                        <Link to={link.original_link} 
                        className='wrap-break-word break-after-all text-blue-400 underline'
                        > 
                            {link.shorten_link}
                        </Link>
                    </div>
                    <div className='w-full '>
                        <span className='text-white text-nowrap mr-1'>Original Link:</span>
                        <Link to={link.original_link} 
                        className='wrap-break-word break-after-all text-blue-400 underline'
                        > 
                            {link.original_link}
                        </Link>
                    </div>
                </div>
            ))
           }
        </div>
        
    </div>
  )
}

export default LinksTable