import React from 'react'
import { Link } from 'react-router-dom'

const SideButton = ({ Icon, name }) => {
  return (
    <div>
      <li>
        <Link to='/'>
          <div className='flex items-center hover:bg-gray-200 p-2 rounded'>
            <Icon size={22} />
            <p className='ml-4 text-sm'>{name}</p>
          </div>
        </Link>
      </li>
    </div>
  )
}

export default SideButton
