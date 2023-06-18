import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'
import { AiOutlineSend } from 'react-icons/ai'
import { SlEmotsmile } from 'react-icons/sl'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'

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
          <div className='w-96 h-[480px] p-2 border rounded-t-md border-slate-400 bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
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
            className='w-96 p-2 border border-slate-400 rounded-b-md'
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
              className='ml-1 mb-1 h-8 w-full items-center text-sm mb-1 border-b-2 focus:border-b-2 outline-0 focus:border-blue-600 focus:ease-in duration-700'
              placeholder='Say Something...'
              type='text'
              value={liveMessage}
              onChange={(e) => {
                setLiveMessage(e.target.value)
              }}
            />
            <div className='flex justify-between w-full'>
              <div className='flex items-center'>
                <SlEmotsmile className="" />
                <RiMoneyDollarBoxLine className=' ml-4' size={20} />
              </div>
              <div className='flex justify-center items-center'>
                <p className='text-xs m-1'>{liveMessage.length?liveMessage.length:0}/200</p>
                <AiOutlineSend className='cursor-pointer hover:text-slate-800 m-1' size={25} color='grey' />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default LiveChat
