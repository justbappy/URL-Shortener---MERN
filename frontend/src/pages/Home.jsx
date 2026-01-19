
import React from 'react'
import Header from '../components/common/Header'
import Search from '../components/UI/Search'
import LinksTable from '../components/UI/LinksTable'

const Home = () => {

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

  const user = false;

  return (
  <div>
    <div
    className='w-[95%] mx-auto pb-10'
    >
      <div
      className='text-white flex flex-col items-center mt-10 gap-5'
      >
       <div>
          <h1
          className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#144ee3] from-19% via-[#eb568e] via-64% via-[#a353aa] to-[#144ee3] inline-block w-full text-center text-transparent bg-clip-text py-2 mb-2'
          >Shorten Your Looong Links :)</h1>
          <p
          className='text-center'
          >An efficient and easy-to-use URL Shortening service that streamlines your online experience</p>
       </div>
        <div 
        className='w-full md:w-1/2'
        >
          <Search/>
        </div>
        <div>
          {
            user ? (
              <p className='text-left'>Recently Shorten Links</p>
            ) : (
               <p className='text-center'>You can create <span>05</span> Shorten Links. Register for unlimited access.</p>
            )
          }
        </div>
      </div>

      <div>
        <LinksTable links={links}/>
      </div>
    </div>
  </div>
  )
}

export default Home