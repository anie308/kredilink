import React from 'react'
import Navbar from '../components/Global/Navbar'
import Footer from '../components/Global/Footer'
import BottomBar from '../components/Global/BottomBar'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='font-rubik scroll-smooth'>
            <div className='relative'>
                {/* <img src="" alt="" /> */}
                <Navbar />
                {children}
            </div>
            <Footer />
            <BottomBar />
        </div>
    )
}

export default Layout
