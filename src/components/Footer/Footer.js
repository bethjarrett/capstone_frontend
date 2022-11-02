import React from 'react'
import { FaLock } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='text-center pb-4 container'>
      <hr />
      <p>&#169; <a href="https://bethjarrett.ca/">Beth Jarrett</a>, 2022</p>
      <p><a href="/login"><FaLock /></a></p>
    </div>
  )
}

export default Footer
