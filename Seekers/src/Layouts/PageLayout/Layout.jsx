import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div className='max-w-7xl container mx-auto px-4'>
        <Navbar/>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout
