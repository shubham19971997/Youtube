import React from 'react'

const ChatMessage = ({ name, message, ind }) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img
        // src='https://cdn-icons-png.flaticon.com/512/709/709722.png'
        src={`https://picsum.photos/200/300?random=${ind}`}
        className='h-8 w-8 rounded-full'
        alt='user'
      />
      <div className='pl-2 flex flex-col'>
        <span className='font-bold text-sm'>{name}</span>
        <span className='text-sm'>{message}</span>
      </div>
    </div>
  )
}

export default ChatMessage
