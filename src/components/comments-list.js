import React from 'react'
import UserComment from './comment'

const CommentsList = ({ comments }) => {
  return comments.map((userComment) => (
    <li key={userComment.id} className="test__comments-list--item">
      <UserComment userComment={userComment} />
    </li>
  ))
}

export default CommentsList
