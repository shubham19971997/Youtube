import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('')
  const dispatch = useDispatch()
  const chatMessages = useSelector((store) => store.chat.messages)
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(21) + ' My Boy',
        })
      )
    }, 1000)
    return () => clearInterval(i)
  }, [])
  return (
    <>
      <div className='w-96 ml-8 h-[560px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
          {chatMessages.map((chatMessage, i) => {
            return (
              <ChatMessage
                key={i}
                name={chatMessage.name}
                message={chatMessage.message}
              />
            )
          })}
        </div>
      </div>

      <form
        className='w-96 ml-8 p-2 ml-2 border border-black'
        onSubmit={(e) => {
          e.preventDefault()
          console.log('On Form Submit')
          dispatch(
            addMessage({
              name: 'Shubham Sikarwar',
              message: liveMessage,
            })
          )
        }}
      >
        <input
          className='px-2 w-72'
          type='text'
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value)
          }}
        />
        <button className='px-2 mx-2 bg-green-100'>Send</button>
      </form>
    </>
  )
}

export default LiveChat
