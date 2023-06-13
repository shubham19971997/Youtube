import React, { useState, useEffect } from 'react'
import YOUTUBE_VIDEO_API_US from '../utils/constants'

const SuggestedVideos = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideos()
  }, [])
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API_US)
    const json = await data.json()
    setVideos(json.items)
  }
  console.log(videos[0])
  return (
    <div className='mt-4 w-80'>
      {videos &&
        videos.map((video) => {
          return (
            <div className='m-2 flex'>
              <div className='flex-initial'>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  className='rounded-md w-40 h-24'
                  alt='img'
                />
              </div>
              <div className='flex-1'>
                <p className='text-xs font-medium pl-1 '>
                  {video.snippet.title.length > 40
                    ? video.snippet.title.slice(0, 65) + '...'
                    : video.snippet.title}
                </p>
                <p className='font-normal text-xs text-slate-600 pl-1 mt-2'>
                  {video.snippet.channelTitle}
                </p>
                <p className="flex">
                  <p className='pl-1 pr-1 font-normal text-xs text-slate-600'>12k views</p>
                  <p className='h-1 w-1 bg-slate-500 mt-1.5 rounded-full'></p>
                  <p className='pl-1 font-normal text-xs text-slate-600'>1 months ago</p>
                </p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default SuggestedVideos
