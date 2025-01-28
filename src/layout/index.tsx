import React from 'react'
import Navbar from '../components/Global/Navbar'
import Footer from '../components/Global/Footer'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='font-rubik'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
