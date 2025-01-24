'use client'

import React from 'react'
import Container from '../container'
import Logo from './logo'
import Favorites from './favorites'



const Navbar = () => {


  return (
    <div className='fixed w-full bg-white z-10 shadow-sm py-6'>
      <Container>
        <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
          {/* <Logo /> */}
          <Favorites /> 
        </div>
      </Container>
    </div>
  )
}

export default Navbar
