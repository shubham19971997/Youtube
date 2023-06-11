import React from 'react'
import Formatter from '../utils/nFormatter'
import getTime from '../utils/getTime'

const VideoCard = ({ info, ind }) => {
  if (!info) return null
  const { snippet, statistics } = info
  const { channelTitle, title, thumbnails,publishedAt } = snippet

  var noSetter = statistics.viewCount > 1000000 ? 1 : 0
  var setTitle = title.length>60 ? title.slice(0,60)+"..." : title
  const views = Formatter(statistics.viewCount, noSetter)
  const time = getTime(publishedAt);

  return (
    <div className='p-1 m-1 mb-0 w-80'>
      <img
        className='rounded-lg h-76 hover:scale-105 hover:rounded-none ease-linear duration-100'
        alt='thumbnails'
        src={thumbnails.medium.url}
      />
      <div className='mt-3 flex '>
        <div className='h-10 w-10 rounded-full bg-slate-200'>
          <img
            alt='PP'
            className='rounded-full h-10 w-10'
            src={`https://picsum.photos/200/300?random=${ind}`}
          />
        </div>
        <ul className='h-32 font-roboto w-64'>
          <li className='font-semibold px-2 text-sm'>{setTitle}</li>
          <li className='font-normal mt-1 text-sm text-slate-500 px-2'>
            {channelTitle}
          </li>
          <div className='flex '>
            <li className='pl-2 pr-1 font-normal text-xs text-slate-500'>
              {views} views
            </li>
            <li className='h-1 w-1 bg-slate-400 mt-1.5 rounded-full'></li>
            <li className='px-1 font-normal text-xs text-slate-500'>
              {time}
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

// export const AdVideoCard = ({ info }) => {
//   return (
//     <div className='p-1 m-1 border border-red-900'>
//       <VideoCard info={info} />
//     </div>
//   )
// }

export default VideoCard
