import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section id='home' className='1g:h-[85vh] flex items-center bg-tertiary lg:bg-cover lg:bg-center lg:bg-no-repeat py-16 lg:py-0 overflow-hidden'>
      <div className="container mx-auto h-full">
        <div className="flex items-center h-auto">
        {/* left side */}
        {/*right side */}
        <div className="flex-1 flex flex-col items-center mt-32 mb-24">
          <p className='text-2xl text-accent mb-[22px]'>Hello, I'm Noel 👋🏻</p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px] 
           text-center lg:text-center md:text-center @screen (max-width: 400px)'>
          A Full-Stack Developer
        </h1>
          <p className='pt-4 pb-8 md:pt-6 md-pb-12 max-w-[480px] text-xl text-center lg:text-center'>
          Crafting user interfaces that seamlessly integrate aesthetics and functionality.
          </p>
          <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all rounded-xl'><Link to="https://www.linkedin.com/in/noel-guillen-blas-b63353257/">Reach out to me</Link></button>
        </div>
        </div>
      </div>
    </section>
  )
}
export default Hero

