import { Outlet } from "react-router-dom";
import React from 'react'

function Layout() {
  return (
   <main>
        <Outlet/>
   </main>
  )
}

export default Layout