import React from 'react'
import { FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import LinksTable from '../components/UI/LinksTable';
import Search from '../components/UI/Search';

const AllLinks = () => {

    const links = [
        {
            original_link: "https://tailwindcss.com/docs/table-layout",
            shorten_link: "url_shortener/short1",
            createAt: "12 Aug 2026",
        },
        {
            original_link: "https://www.google.com/search?q=how+to+set+only+1+line+text+in+td+in+tailwind+css&oq=how+to+set+only+1+line+text+in+td+in+tailwind+css&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigAdIBCDk3MDBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8",
            shorten_link: "url_shortener/short2",
            createAt: "12 Aug 2026",
        },
        {
            original_link: "https://react-icons.github.io/react-icons/search/#q=alphabet",
            shorten_link: "url_shortener/short3",
            createAt: "12 Aug 2026",
        },
        {
            original_link: "https://htmlcolorcodes.com/hex-to-rgb/",
            shorten_link: "url_shortener/short4",
            createAt: "12 Aug 2026",
        },
        {
            original_link: "https://tailwindcss.com/docs/border-spacing",
            shorten_link: "url_shortener/short5",
            createAt: "12 Aug 2026",
        },
    ];

  return (
    <div className='flex flex-col items-center gap-5 mt-5 md:mt-2'>
            <div className='w-full md:w-1/2'>
                <Search/>
            </div>
        <LinksTable links={links}/>
    </div>
  )
}

export default AllLinks