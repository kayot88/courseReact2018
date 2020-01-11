import React, { Component } from 'react'

export default (OriginalComponent) => {
  return class extends Component {
    state = { openComment: false }

    handlerBtnClick = () => {
      console.log('name_click', this.state.openComment)
      this.setState((state) => {
        openComment: !state.openComment
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
