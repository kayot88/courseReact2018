import React, { Component } from 'react'

class UserComment extends Component {
  state = {
    openComment: false
  }
  handlerBtnClick = () => {
    const temp = this.state.openComment ? false : true
    this.setState({ openComment: temp })
    console.log('name_click', this.state.openComment)
  }
  render() {
    const { userComment } = this.props
    return (
      <div>
        <button onClick={this.handlerBtnClick}>
          {userComment ? userComment.user : 'close'}
        </button>
        {this.state.openComment && <section>{userComment.text}</section>}
      </div>
    )
  }
}

export default UserComment
