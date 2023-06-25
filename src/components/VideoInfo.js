import React, { useState } from 'react'
import Formatter from '../utils/nFormatter'
import WatchButton from './WatchButton'
import { TfiBell, TfiDownload } from 'react-icons/tfi'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'
import { TbHeartPlus } from 'react-icons/tb'
import { BsThreeDots } from 'react-icons/bs'
import getTime from '../utils/getTime'

const VideoInfo = ({ info }) => {
  const { snippet, statistics } = info
  const { commentCount, viewCount, likeCount } = statistics
  const { title, description, channelTitle, publishedAt } = snippet

  const [showMore, setShowMore] = useState(false)

  const buttonText = [
    { icon: RiShareForwardLine, name: 'Share' },
    { icon: TfiDownload, name: 'Download' },
    { icon: TbHeartPlus, name: 'Thanks' },
  ]

  const time = getTime(publishedAt)
  const subscribers = Formatter(viewCount, 1)
  const views = Formatter(viewCount / 3, 0)
  const likes = Formatter(likeCount, 1)

  return (
    <div className='mt-2 font-semibold'>
      <h1>{title}</h1>
      <div className='mt-3 flex space-x-0 items-center'>
        <div className='flex items-center w-full h-full'>
          <div className='h-10 w-10 rounded-full bg-slate-200'>
            <img
              alt='PP'
              className='rounded-full h-10 w-10'
              src={`https://xsgames.co/randomusers/avatar.php?g=male`}
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
          <div className=' ml-2 flex items-center cursor-pointer bg-slate-100 hover:bg-slate-200 rounded-full h-full p-1'>
            <TfiBell className='m-1' />
            <p className='m-1 text-sm'>Subscribed</p>
            <MdOutlineKeyboardArrowDown className='m-1' />
          </div>
        </div>
        <div className='flex items-center w-full h-full mr-0 pr-0 cursor-pointer'>
          <div className=' ml-2 flex items-center bg-slate-100 hover:bg-slate-200 rounded-full h-full p-1'>
            <AiOutlineLike size={20} className='mx-1' />
            <p>{likes}</p>
            <div className='inline-block h-6 min-h-[1em] w-0.5 self-stretch bg-slate-400 mx-4'></div>
            <AiOutlineDislike size={20} className='mx-1' />
          </div>
          {buttonText.map((button) => {
            return <WatchButton Icon={button.icon} name={button.name} />
          })}
          <div className='ml-2 h-8 w-8 cursor-pointer flex items-center bg-slate-100 hover:bg-slate-200 rounded-full h-full p-2'>
            <BsThreeDots size={18} />
          </div>
        </div>
      </div>
      <div className='w-full h-full text-sm bg-slate-100 hover:bg-slate-200 rounded-md p-4 mt-4'>
        <p className='text-slate-500'>
          <span className='text-slate-900'>
            {views} views | {time} |
          </span>{' '}
          {channelTitle}
        </p>
        <p
          className='mt-2 cursor-pointer font-normal'
          onClick={() => setShowMore(!showMore)}
        >
          {showMore
            ? description
            : description.slice(0, 350) + '......'}
        </p>
      </div>
    </div>
  )
}

export default VideoInfo
