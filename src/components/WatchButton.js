import React from 'react'

const WatchButton = ({Icon,name}) => {
  return (
    <div className=' ml-2 flex items-center cursor-pointer bg-slate-100 hover:bg-slate-200 rounded-full h-full p-1'>
      <Icon className='mx-1 my-1' size={18} />
      <p className='mx-1 text-sm h-6'>{name}</p>
    </div>
  )
}

export default WatchButton
