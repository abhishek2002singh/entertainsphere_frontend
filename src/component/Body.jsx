import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const Body = () => {
  return (
    // <div>
    //     {/* < Nav />
    //     <SideBar />
    //     <Outlet /> */}
    //    {/*  
    //     <Footer /> */}
    // </div>  
        <div >
         <Nav />

      {/* Main content area below Nav */}
      <div className="flex mt-16  overflow-hidden">
            {/* Sidebar */}
            <SideBar />

            {/* Page content */}
            <div className="flex-1 h-screen overflow-auto no-scrollbar ">
               <Outlet />
            </div>
      </div>

      <Footer />
    </div>

  )
}

export default Body