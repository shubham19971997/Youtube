import React from 'react'

const Button = ({ name }) => {
  return (
    <div>
      <button className='px-4 py-1 m-1 bg-gray-100 hover:bg-gray-300 ease-in-out duration-200 rounded-lg text-sm'>{name}</button>
    </div>
  )
}

export default Button
