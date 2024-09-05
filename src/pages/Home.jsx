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
      <div className="flex-items-center justify-center">
        {/* Hero Image Section */}
        <div className="relative  ">
          <img src={heroImg} alt="Hero Image" />
          <div className="absolute h-fit flex flex-col items-start px-5 py-6 gap-5 lg:w-[630px] md:w-[622px] sm:px-10 sm:bottom-[-250px] md:left-[80px] bottom-[-220px] md:bottom-[40px]  bg-gradient-to-r from-[#1CBDDD] to-[#4DCA79]">
            <h1 className="text-white  text-[36px] sm:text-[48px] font-bold leading-none ">
              We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
            </h1>
            <Button title="Get free consultation" />
          </div>
        </div>

        <div className="px-5 py-6 sm:px-10 sm:py-16 md:px-16 lg:px-36 sm:mt-56 mt-36 md:mt-0 flex flex-col min-w-full gap-[47px] lg:gap-20">
          {/* Body Part 01 */}
          <div className="flex flex-col sm:flex-row md:flex-row items-center justify-start">
            <img src={desktopImg} alt="Desktop Image" className="w-[414px]" />
            <div className="flex flex-col text-wrap items-center sm:items-start gap-3 text-center sm:text-start">
              <h1 className="text-[27px] font-[600] text-primary_color">Web & Mobile App Development</h1>
              <p>
                Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor
                content and engagement methods to respond to different intents shown by your potential customers who
                interact with your business online.
              </p>
              <div className="w-[129px] mt-5">
                <Button title="Learn More" />
              </div>
            </div>
          </div>

          {/* Body Part 02 */}
          <div className="flex flex-col-reverse sm:flex-row md:flex-row items-center justify-center gap-[108px]">
            <div className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-start">
              <h1 className="text-[27px] font-[600] text-primary_color">Digital Strategy Consulting</h1>
              <p>
                Your digital strategy should complement the overall marketing strategy of the company. In online
                marketing, each component will never work in isolation and every business needs a different mix. We
                provide a clear concept and strategic overview to find the most efficient model for your business.
              </p>
              <div className="w-[129px] mt-5">
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
