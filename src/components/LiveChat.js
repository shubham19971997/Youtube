import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('')
  const [showChat, setShowChat] = useState(false)

  const dispatch = useDispatch()
  const chatMessages = useSelector((store) => store.chat.messages)
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName() + ' ' + generateRandomName(),
          message: makeRandomMessage(),
        })
      )
    }, 1000)
    return () => clearInterval(i)
  }, [])
  return (
    <div>
      <div
        className='rounded-full cursor-pointer mt-0 border-2 m-2 p-1 text-center text-sm font-medium w-96 shadow-sm hover:bg-slate-200'
        onClick={() => setShowChat(!showChat)}
      >
        {showChat ? 'Hide Chat Replay' : 'Show Chat Replay'}
      </div>
      {showChat && (
        <div className='ml-2'>
          <div className='w-96 h-[480px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
            <div>
              {chatMessages.map((chatMessage, i) => {
                return (
                  <ChatMessage
                    key={i}
                    name={chatMessage.name}
                    message={chatMessage.message}
                    ind={i}
                  />
                )
              })}
            </div>
          </div>

          <form
            className='w-96 p-2 border border-black rounded'
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
        </div>
      )}
    </div>
  )
}

export default LiveChat
