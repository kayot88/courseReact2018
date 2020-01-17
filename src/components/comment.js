import React, { Component } from 'react'
import { connect } from 'react-redux'
import testDecorator from '../decorators/testDecorator'
import { createSelectorComments } from '../selectors'

class UserComment extends Component {
  render() {
    const { comment, openComment, handlerBtnClick } = this.props
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

const createMapStateToProps = () => {
  const selectorComments = createMapStateToProps()
  return (state, ownProps) => ({
    comment: selectorComments(state, ownProps.userComment)
  })
}

export default connect()(testDecorator(UserComment))
