import React from 'react'

function Logo({width = "100%"}) {
  return (
    <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
    style={{width}} 
    className='object-contain h-12 w-auto bg-gray-100 p-1 duration-200 hover:bg-gray-200 rounded-full shadow-md transition-all cursor-pointer hover:shadow-lg hover:scale-105 hover:rotate-12 transform duration-200 ease-in-out hover:ease-in-out'
    alt='Logo placeholder' />
  )
}

export default Logo