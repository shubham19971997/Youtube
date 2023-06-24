import React, { useState, useEffect, useRef } from 'react'
import useScrollDirection from '../utils/useScrollDirection'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu, hideSuggestions, showSuggestions } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoIosSearch } from 'react-icons/io'
import { IoMdMic } from 'react-icons/io'
import { RiVideoAddLine } from 'react-icons/ri'
import { TfiBell } from 'react-icons/tfi'

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const searchInput = useRef(null)

  const searchCache = useSelector((store) => store.search)
  const newSuggestions = useSelector((store) => store.app.suggestions)

  const isHidden = useScrollDirection()
  const dispatch = useDispatch()
  const toggleMenuHolder = () => {
    dispatch(toggleMenu())
  }
  if (isHidden) {
    dispatch(hideSuggestions())
    searchInput.current.blur() // removing focus
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestions()
      }
    }, 200)
    if (isHidden) {
      console.log('we can toggle it')
    }
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    setSuggestions(json[1])

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    )
  }

  return (
    <div className='flex fixed p-2 w-full bg-white z-10'>
      <div className='flex basis-1/4 items-center col-span-1 content-center'>
        <div className='hover:bg-gray-200 p-2 flex items-center justify-center rounded-full h-9 w-9'>
          <RxHamburgerMenu
            onClick={() => toggleMenuHolder()}
            className='cursor-pointer'
            size={20}
          />
        </div>
        <div className='content-center p-2'>
          <a href='/'>
            <img
              className='h-5'
              alt='logo'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'
            />
          </a>
        </div>
      </div>
      <div className='col-span-10 px-10 basis-1/2'>
        <div className='flex'>
          <input
            className='w-full text-left border border-gray-400 focus:outline-none focus:drop-shadow-md focus:ring-1 focus:border-blue-700 pl-4 h-9 rounded-l-full'
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => dispatch(showSuggestions())}
            onBlur={() => dispatch(hideSuggestions())}
            ref={searchInput}
          />
          <div>
            <button className='border border-gray-400 p-2 h-9 rounded-r-full bg-gray-100'>
              <IoIosSearch size={20} color='gray' className='mx-3' />
            </button>
          </div>
          <div className='ml-4 cursor-pointer flex justify-center items-center h-8 w-10 rounded-full hover:bg-slate-200'>
            <IoMdMic size={18} />
          </div>
        </div>
        {newSuggestions && searchQuery.length > 0 && (
          <div className='fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
            <ul>
              {suggestions.map((suggestion) => {
                return (
                  <li
                    key={suggestion}
                    className='py-2 px-3 shadow-sm hover:bg-gray-100'
                  >
                    {suggestion}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
      <div className='col-span-1 flex items-center flex-row-reverse basis-1/4'>
        <div className='p-2'>
          <img
            className='h-6 w-6'
            alt='user'
            src='https://cdn-icons-png.flaticon.com/512/709/709722.png'
          />
        </div>
        <div className='hover:bg-gray-200 flex items-center justify-center rounded-full h-8 w-8'>
          <TfiBell size={18} className='' />
        </div>
        <div className='hover:bg-gray-200 flex items-center justify-center rounded-full h-8 w-8'>
          <RiVideoAddLine size={18} />
        </div>
      </div>
    </div>
  )
}

export default Head
