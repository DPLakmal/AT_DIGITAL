import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import heroImg from '../assets/hero.jpeg'
import desktopImg from '../assets/image01.png'
import searchImg from '../assets/image02.png'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Container Section */}
      <div className="flex-grow items-center justify-center">
        {/* Hero Image Section */}
        <div className="relative">
          <img src={heroImg} alt="Hero Image" />
          <div className="absolute flex flex-col items-start p-10 gap-5 w-[630px] h-[320px] left-[80px] bottom-[40px] bg-gradient-to-r from-[#1CBDDD] to-[#4DCA79]">
            <h1 className="text-white text-[48px] font-bold leading-none">
              We crush your competitors, goals, and sales records - without the B.S.
            </h1>
            <Button title="Get free consultation" />
          </div>
        </div>

        <div className="px-[94px] py-[47px] flex flex-col gap-[47px]">
          {/* Body Part 01 */}
          <div className="flex items-center justify-center gap-[108px]">
            <img src={desktopImg} alt="Desktop Image" className="w-[414px]" />
            <div className="flex flex-col gap-3 w-[542px]">
              <h1 className="text-[27px] font-[600] text-primary_color">Web & Mobile App Development</h1>
              <p>
                Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor
                content and engagement methods to respond to different intents shown by your potential customers who
                interact with your business online.
              </p>
              <div className="w-[129px]">
                <Button title="Learn More" />
              </div>
            </div>
          </div>

          {/* Body Part 02 */}
          <div className="flex items-center justify-center gap-[108px]">
            <div className="flex flex-col gap-3 w-[542px]">
              <h1 className="text-[27px] font-[600] text-primary_color">Digital Strategy Consulting</h1>
              <p>
                Your digital strategy should complement the overall marketing strategy of the company. In online
                marketing, each component will never work in isolation and every business needs a different mix. We
                provide a clear concept and strategic overview to find the most efficient model for your business.
              </p>
              <div className="w-[129px]">
                <Button title="Learn More" />
              </div>
            </div>
            <img src={searchImg} alt="Search Image" className="w-[414px]" />
          </div>
          {/* FAQ */}
          <FAQ />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
