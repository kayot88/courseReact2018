import React, { Component } from 'react'
import { connect } from 'react-redux'
import testDecorator from '../decorators/testDecorator'
import { selectorComments } from '../selectors'

class UserComment extends Component {
  render() {
    console.log(this.props)
    const { comment, openComment, handlerBtnClick } = this.props
    console.log(comment)
    return (
      <div>
        <button onClick={handlerBtnClick}>
          {comment ? comment.user : 'close'}
        </button>
        {openComment && (
          <div>
            {comment.text} by <b>{comment.user}</b>
          </div>
        )}
      </div>
    )
  }
}

export default connect((state, ownProps) => ({
  comment: selectorComments(state, ownProps.userComment)
  // comment: state.comments.find((item) => item.id === ownProps.userComment.id)
}))(testDecorator(UserComment))
