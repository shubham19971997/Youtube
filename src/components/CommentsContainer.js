import React, { useState } from 'react'
import { MdSort } from 'react-icons/md'
import { SlEmotsmile } from 'react-icons/sl'

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
    <div className='flex shadow-sm w-96  bg-gray-100 p-2 rounded-lg my-2'>
      <img
        className='w-12 h-12 rounded-full'
        alt='user'
        src={`https://picsum.photos/200/300?random=${ind}`}
      />
      <div className='px-3'>
        <p className='font-medium text-xs'>{name}</p>
        <p>{text}</p>
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
          src={`https://picsum.photos/200/300?random=${Math.floor(
            Math.random() * 10
          )}`}
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
                  comment.length > 0 ? 'bg-blue-600 text-white' : ''
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
