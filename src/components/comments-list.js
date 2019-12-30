import React from 'react'
import UserComment from './comment'

const CommentsList = ({ comments }) => {
  return comments.map((userComment) => (
    <li key={userComment.id}>
      <UserComment userComment={userComment} />
    </li>
  ))
}

export default CommentsList
