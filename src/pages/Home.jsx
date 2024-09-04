import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">Hi</div>
      <Footer />
    </div>
  )
}

export default Home
