import React, { useState } from 'react'
import { MdSort } from 'react-icons/md'
import { SlEmotsmile } from 'react-icons/sl'
import { AiOutlineLike } from 'react-icons/ai'
import { BiDislike } from 'react-icons/bi'
import { IoMdArrowDropdown } from 'react-icons/io'

const commentsData = [
  {
    name: 'Shubham Sikarwar',
    text: 'lorem ipsum is not the good way to comment on something',
    replies: [
      {
        name: 'Shubham Sikarwar',
        text: 'lorem ipsum is not the good way to comment on something',
        replies: [
          {
            name: 'Shubham Sikarwar',
            text: 'lorem ipsum is not the good way to comment on something',
            replies: [
              {
                name: 'Shubham Sikarwar',
                text: 'lorem ipsum is not the good way to comment on something',
                replies: [
                  {
                    name: 'Shubham Sikarwar',
                    text: 'lorem ipsum is not the good way to comment on something',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Shubham Sikarwar',
        text: 'lorem ipsum is not the good way to comment on something',
        replies: [],
      },
    ],
  },
  {
    name: 'Shubham Sikarwar',
    text: 'lorem ipsum is not the good way to comment on something',
    replies: [],
  },
  {
    name: 'Shubham Sikarwar',
    text: 'lorem ipsum is not the good way to comment on something',
    replies: [],
  },
  {
    name: 'Shubham Sikarwar',
    text: 'lorem ipsum is not the good way to comment on something',
    replies: [],
  },
]

const CommentsList = ({ comments }) => {
  return comments.map((comment, ind) => (
    <div>
      <Comment data={comment} ind={ind} />
      <div className='pl-5 border w-96 border-l-black'>
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ))
}

const Comment = ({ data, ind }) => {
  console.log('props', data)
  const { name, text, replies } = data
  return (
    <div className='flex shadow-sm w-96 w-full bg-gray-100 p-2 rounded-lg my-2'>
      <img
        className='w-8 h-8 flex-none rounded-full'
        alt='user'
        src={`https://picsum.photos/200/300?random=${ind}`}
      />
      <div className='px-3'>
        <div className='flex'>
          <p className='font-medium text-xs'>{name}</p>
          <p className='font-normal text-xs text-slate-500 ml-1'>
            {Math.floor(Math.random() * 10)} hours ago
          </p>
        </div>
        <div>
          <p>{text}</p>
          <div className='flex mt-1 items-center'>
            <AiOutlineLike size={18} />
            <p className='text-xs ml-1'>{Math.floor(Math.random() * 1000)}</p>
            <BiDislike className='ml-6' size={18} />
            <p className='text-xs font-medium ml-4'>Reply</p>
          </div>
          <div className='flex items-center mt-1'>
            <IoMdArrowDropdown size={20} color='#0369A1' />
            <p className='text-xs ml-4 font-medium text-sky-700'>
              {Math.floor(Math.random() * 10)} replies
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const CommentsContainer = () => {
  const [comment, setComment] = useState('')
  return (
    <div className='m-5 p-2 relative'>
      <div className='flex'>
        <h1 className='text-normal font-normal'>Comments:</h1>
        <MdSort className='ml-16' size={25} />
        <p className='text-sm '>Sort by</p>
      </div>
      <div className='mt-4 flex'>
        <img
          className='w-10 h-10 rounded-full'
          alt='Profile'
          src={`https://xsgames.co/randomusers/avatar.php?g=male`}
        />
        <div className='w-full'>
          <input
            className='ml-2 w-full pb-1 text-xs border-b-2 focus:border-b-2 outline-0 focus:border-black focus:ease-in duration-700'
            placeholder='Add a comment...'
            onChange={(e) => setComment(e.target.value)}
          />
          <div className='flex justify-between w-full items-center'>
            <SlEmotsmile />
            <div>
              <button className='m-1 font-medium hover:bg-slate-200 p-2 text-sm rounded-full'>
                Cancel
              </button>
              <button
                className={`m-1 bg-slate-100 font-medium text-slate-500 p-2 text-sm rounded-full ${
                  comment.length > 0 ? ' bg-sky-700 text-white' : ''
                }`}
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer
