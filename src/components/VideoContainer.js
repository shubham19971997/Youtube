import React, { useEffect, useState } from 'react'
import YOUTUBE_VIDEO_API from './../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideos()
  }, [])
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API)
    const json = await data.json()
    setVideos(json.items)
  }
  console.log(videos)
  return (
    <div className='flex items-center flex-wrap mt-2 ml-2 roboto'>
      {videos &&
        videos.map((video, index) => {
          return (
            <Link
              key={video.id}
              to={'/watch?v=' + video.id}
              state={{info: video}}
            >
              <VideoCard info={video} ind={index} />
            </Link>
          )
        })}
    </div>
  )
}

export default VideoContainer
