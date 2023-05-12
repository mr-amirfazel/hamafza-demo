import React, { FC, PropsWithChildren } from 'react'
import Navbar from '../Navbar'
interface LayoutProps extends PropsWithChildren{

}
const Layout:FC<LayoutProps> = ({children}) => {
  return (
    <div className="h-screen grid place-items-center">
        <div className="bg-slate-400 h-3/4  w-1/2 md:w-1/4 text-center">
          <Navbar />
          {children}
          
        </div>
        
    </div>
  )
}

export default Layout