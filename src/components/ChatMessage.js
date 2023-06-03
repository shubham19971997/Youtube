import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        src='https://cdn-icons-png.flaticon.com/512/709/709722.png'
        className='h-8'
        alt='user'
      />
      <span className='font-bold'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
