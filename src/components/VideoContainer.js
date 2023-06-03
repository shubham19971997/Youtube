import React, { useEffect, useState } from 'react'
import YOUTUBE_VIDEO_API from './../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { AdVideoCard } from './VideoCard'

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
  return (
    <div className='flex flex-wrap mt-4 ml-4'>
      {videos[0] && <AdVideoCard info={videos[0]}/>}
      {videos &&
        videos.map((video) => {
          return (
            <Link key={video.id} to={"/watch?v="+video.id}>
              <VideoCard info={video} />
            </Link>
          )
        })}
    </div>
  )
}

export default VideoContainer
