import React from 'react';
// import scoials data
import {social} from '../data'
function Socials() {
  return (
    <ul className='flex space-x-6'>{social.map((item, index)=>{
      return (<li className='flex justify-center items-center text-accent' key={index}>
        <a className='text-base' href={item.href}>
          {item.icon}
        </a>
      </li>)
    })} </ul>
  )
}

export default Socials