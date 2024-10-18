import React from 'react'
import pdf from ".././assets/img/NGB.pdf"

//import image
import Image from '../assets/img/coffee-shop.webp';

function About() {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-10 xl:flex-row'>
        {/*h-full */}
          <img
            className='object-cover h-[360px] w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt='profile'
          />
         <div className='flex flex-col items-center justify-center text-center lg:items-start lg:text-left'>
          <div className='flex flex-col'>
            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
              Noel Guillen
            </h2>
            <p className='mb-4 text-accent'>
              Full-Stack Web Developer
            </p>
            <hr className='opacity-5' />
            <p className='mb-8 text-xl'>
              Passionate Full-Stack Developer with nearly 2 years of experience. I excel in tackling complex challenges and delivering high-quality results. I specialize in JavaScript, React JS, CSS, HTML, and various front-end frameworks. On the back end, I excel in GraphQL and Firebase, alongside JavaScript, for robust server-side functionalities. Additionally, I have experience managing databases using MySQL, creating REST APIs with Spring Boot and Java, and properly testing with Postman
            </p>
          </div>
          <button className='transition-all btn btn-md bg-accent hover:bg-secondary-hover rounded-xl'>
            <a href={pdf}>My Resume</a>
          </button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About
