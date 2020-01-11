import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment } from '../ac'

class Counter extends Component {
  render() {
    const { number, increment } = this.props
    return (
      <div>
        <h3>{number}</h3>
        <button onClick={increment}>increment</button>
      </div>
    )
  }
}

Counter.propTypes = {
  number: PropTypes.number,
  increment: PropTypes.func
}

const mapStateToProps = (storeState) => {
  return { number: storeState.counter, increment: storeState.increment }
}

const mapDispatchToProps = {
  increment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
