import React, { Component } from 'react'

export default (OriginalComponent) => {
  return class extends Component {
    state = { openItemId: null }

    toggleOpenItem = (itemId) => {
      // console.log(this.state.openItemId)
      if (this.state.openItemId === itemId) {
        return this.setState({ openItemId: '' })
      } else {
        return this.setState({ openItemId: itemId })
      }
    }
    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
}
