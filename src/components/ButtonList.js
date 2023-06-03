import React from 'react'
import Button from './Button'

const Options = [
  'All',
  'New To You',
  'Gaming',
  'Kapil Sharma',
  'Stand Up',
  'Comedy',
  'Cooking',
  'News',
  'Cricket',
  'Sports League',
  'Computer Programming',
  'Politics',
  'Bollywood',
]
const ButtonList = () => {
  return (
    <div className='flex'>
      {Options.map((option) => {
        return <Button name={option} />
      })}
    </div>
  )
}

export default ButtonList
