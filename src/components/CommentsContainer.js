import React from 'react'
import { MdSort } from 'react-icons/md'

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
          alt="Profile"
          src={`https://picsum.photos/200/300?random=${Math.floor(
            Math.random() * 10
          )}`}
        />
        <input className='ml-2 w-full pl-2 text-sm' placeholder='Add a comment...'  />
      </div>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer
