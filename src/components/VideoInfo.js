import React from 'react'
import Formatter from '../utils/nFormatter'
import { TfiBell } from 'react-icons/tfi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'

const VideoInfo = ({ info }) => {
  const { snippet, statistics } = info
  const { commentCount, viewCount, likeCount } = statistics
  const { title, description, channelTitle } = snippet

  const subscribers = Formatter(viewCount, 1)
  return (
    <div className='mt-2 font-semibold'>
      <h1>{title}</h1>
      <div className='mt-3 flex items-center'>
        <div className='h-10 w-10 rounded-full bg-slate-200'>
          <img
            alt='PP'
            className='rounded-full h-10 w-10'
            src={`https://picsum.photos/200/300?random=2`}
          />
        </div>
        <div className='font-roboto'>
          <p className='font-medium text-xs font-semibold text-base px-2'>
            {channelTitle}
          </p>
          <p className='pl-2 pr-1 font-normal text-xs text-slate-500 '>
            {subscribers + ' subscribers'}
          </p>
        </div>
        <div className=' ml-2 flex items-center bg-slate-100 hover:bg-slate-200 rounded-full h-full p-1'>
          <TfiBell className='m-1' />
          <p className='m-1 text-sm'>Subscribed</p>
          <MdOutlineKeyboardArrowDown className='m-1' />
        </div>
        <div className=' ml-2 flex items-center bg-slate-100 hover:bg-slate-200 rounded-full h-full p-1'>
          <AiOutlineLike size={20} className='mx-1' />
          <div className='inline-block h-6 min-h-[1em] w-0.5 self-stretch bg-slate-400 mx-4'></div>
          <AiOutlineDislike size={20} className='mx-1' />
        </div>
        <div className=' ml-2 flex items-center bg-slate-100 hover:bg-slate-200 rounded-full p-1'></div>
      </div>
    </div>
  )
}

export default VideoInfo
