import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const layout = ({children, appProps}) => {
  return (
    <>
        <Navbar />

            {children}

        <Footer />
    </>
  )
}

export default layout