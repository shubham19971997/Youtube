import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams, useLocation } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'
import VideoInfo from './VideoInfo'
import SuggestedVideos from './SuggestedVideos'

const WatchPage = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  let { state } = useLocation()
  console.log(state.info)
  return (
    <div className='flex flex-col pl-24 w-full'>
      <div className='flex pt-20 w-full'>
        <div>
          <iframe
            width='980'
            height='528'
            src={'https://www.youtube.com/embed/' + searchParams.get('v')}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='rounded-sm'
          ></iframe>
          <div>
            <VideoInfo info={state.info} />
            <CommentsContainer />
          </div>
        </div>
        <div className='mr-8'>
          <LiveChat />
          <SuggestedVideos />
        </div>
      </div>
      
    </div>
  )
}

export default WatchPage
