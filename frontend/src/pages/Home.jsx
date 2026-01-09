
import React from 'react'
import Header from '../components/common/Header'
import Search from '../components/UI/Search'
import LinksTable from '../components/UI/LinksTable'

const Home = () => {


  const user = false;

  return (
  <div>
    <div
    className='w-[95%] mx-auto pb-10'
    >
      <Header/>

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
        <LinksTable/>
      </div>
    </div>
  </div>
  )
}

export default Home