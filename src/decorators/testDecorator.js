import React, { Component } from 'react'

export default (OriginalComponent) => {
  return class extends Component {
    state = { openComment: false }

    handlerBtnClick = () => {
      this.setState({
        openComment: !this.state.openComment
      })
    }
    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          handlerBtnClick={this.handlerBtnClick}
        />
      )
    }
  }
}
