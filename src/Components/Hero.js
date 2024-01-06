import React from 'react'
import { Link } from 'react-router-dom';
// import portrait image
import noelImg from '../assets/img/noelbanner.webp';

function Hero() {
  return (
    <section id='home' className='1g:h-[85vh] flex items-center bg-tertiary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
        {/* left side */}
      <div className="hidden lg:flex flex-1 justify-end items-end h-full">
  <img src={noelImg} alt='profile-picture' className="max-w-full max-h-full pt-20" />
</div>
        {/*right side */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <p className='text-lg text-accent mb-[22px]'>Hello, I'm Noel 👋🏻</p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] 
          lg:text-left text-center lg:text-left md:text-center @screen (max-width: 400px)'>
          A Front-End Developer
        </h1>
          <p className='pt-4 pb-8 md:pt-6 md-pb-12 max-w-[480px] text-xl text-center lg:text-left'>
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
