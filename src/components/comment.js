import React, { Component } from 'react'
import testDecorator from '../decorators/testDecorator'

class UserComment extends Component {
  render() {
    const { userComment, handlerBtnClick, openComment } = this.props
    return (
      <div>
        <button onClick={handlerBtnClick}>
          {userComment ? userComment.user : 'close'}
        </button>
        {openComment && <section>{userComment.text}</section>}
      </div>
    )
  }
}

export default testDecorator(UserComment)
