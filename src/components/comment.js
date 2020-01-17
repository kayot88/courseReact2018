import React, { Component } from 'react'
import { connect } from 'react-redux'
import testDecorator from '../decorators/testDecorator'
import { createSelectorComments } from '../selectors'

class UserComment extends Component {
  render() {
    const { userComment, openComment, handlerBtnClick } = this.props
    console.log(this.props)
    return (
      <div>
        <button onClick={handlerBtnClick}>
          {userComment ? userComment.user : 'close'}
        </button>
        {openComment && (
          <div>
            {userComment.text} by <b>{userComment.user}</b>
          </div>
        )}
      </div>
    )
  }
}

const createMapStateToProps = () => {
  const selectorComments = createSelectorComments()
  return (state, ownProps) => ({
    comment: selectorComments(state, ownProps.userComment)
  })
}

export default connect(createMapStateToProps)(testDecorator(UserComment))
