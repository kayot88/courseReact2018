import React, { Component } from 'react'
import accordeon from '../decorators/accordeon'

class UserForm extends Component {
  state = {
    username: ''
  }
  render() {
    return (
      <div>
        Username:
        <input value={this.state.username} onChange={this.handleSubmit} />
      </div>
    )
  }

  handleSubmit = (e) => {
    this.setState({ username: e.target.value })
    const imputValue = e.target.value
    if (imputValue.length > 5) {
      this.setState({ username: '' })
    }
    // console.log(this.state.username)
  }
}

export default accordeon(UserForm)
