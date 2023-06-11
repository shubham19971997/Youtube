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
  return comments.map((comment, ind) => (
    <div>
      <Comment data={comment} ind={ind}/>
      <div className='pl-5 border w-96 border-l-black'>
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ))
}

const Comment = ({data,ind}) => {
  console.log("props",data)
  const { name, text, replies } = data
  return (
    <div className='flex shadow-sm w-96 bg-gray-100 p-2 rounded-lg my-2'>
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
    <div className='m-5 p-2'>
      <h1 className='text-xl  font-medium'>Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer
