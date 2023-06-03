import React from 'react'

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
  return comments.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ))
}

const Comment = ({ data }) => {
  const { name, text, replies } = data
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
      <img
        className='w-12 h-12'
        alt='user'
        src='https://cdn-icons-png.flaticon.com/512/709/709722.png'
      />
      <div className='px-3 '>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer
