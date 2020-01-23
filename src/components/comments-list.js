import React from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserComment from './comment'
import { commentSelector } from '../selectors'

const CommentsList = ({ comments, normalizedComments }) => {
  console.log(normalizedComments)

  return normalizedComments.map((userComment) => (
    <div key={userComment.id} className="test__comments-list--item">
      <UserComment userComment={userComment} />
    </div>
  ))
}

CommentsList.propTypes = {
  // comments: PropTypes.array.isRequired
}

export default connect((state, ownProps) => {
  console.log(typeof ownProps.comments)
  return {
    normalizedComments: ownProps.comments.map((id) =>
      state.comments.find((comment) => comment.id === id)
    )
  }
})(CommentsList)
