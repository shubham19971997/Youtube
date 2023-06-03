import React from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineHome, AiOutlineLike } from 'react-icons/ai'
import {
  MdOutlineSubscriptions,
  MdSlowMotionVideo,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineOndemandVideo,
  MdOutlineWatchLater,
  MdOutlineTrendingUp,
  MdOutlineShoppingBag,
  MdOutlineMusicNote,
} from 'react-icons/md'
import { TfiVideoClapper } from 'react-icons/tfi'
import { SiYoutubegaming } from 'react-icons/si'
import { BsTrophy } from 'react-icons/bs'
import SideButton from './SideButton'

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  //Early return coding pattern
  if (!isMenuOpen) return null

  const topView = [
    { icon: AiOutlineHome, iconName: 'Home' },
    { icon: MdSlowMotionVideo, iconName: 'Shorts' },
    { icon: MdOutlineSubscriptions, iconName: 'Subscriptions' },
  ]
  const middleView = [
    { icon: MdOutlineVideoLibrary, iconName: 'Library' },
    { icon: MdOutlineHistory, iconName: 'History' },
    { icon: MdOutlineOndemandVideo, iconName: 'My Videos' },
    { icon: MdOutlineWatchLater, iconName: 'Watch Later' },
    { icon: AiOutlineLike, iconName: 'Liked Videos' },
  ]
  const bottomView = [
    { icon: MdOutlineTrendingUp, iconName: 'Trending' },
    { icon: MdOutlineShoppingBag, iconName: 'Shopping' },
    { icon: MdOutlineMusicNote, iconName: 'Music' },
    { icon: TfiVideoClapper, iconName: 'Movies' },
    { icon: SiYoutubegaming, iconName: 'Gaming' },
    { icon: BsTrophy, iconName: 'Sports' },
  ]

  return (
    <div className='p-5 shadow-lg col-span-2 w-48 mt-12'>
      <ul>
        {topView?.map((item) => {
          return <SideButton Icon={item.icon} name={item.iconName} />
        })}
      </ul>
      <div className='h-px  mt-2 p-0 bg-gray-200'></div>
      <ul className='mt-4'>
        {middleView.map((item) => {
          return <SideButton Icon={item.icon} name={item.iconName} />
        })}
      </ul>
      <div className='h-px  mt-2 p-0 bg-gray-200'></div>
      <ul className='mt-4'>
        {bottomView.map((item) => {
          return <SideButton Icon={item.icon} name={item.iconName} />
        })}
      </ul>
    </div>
  )
}

export default Sidebar
