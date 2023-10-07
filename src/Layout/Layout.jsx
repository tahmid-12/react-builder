import React from 'react'
import { Outlet } from "react-router-dom";
import { Navbar } from '../components';

function Layout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        Copyright
      </footer>
    </div>
  )
}

export default Layout