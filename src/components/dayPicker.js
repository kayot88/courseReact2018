import React, { Component } from 'react'
import { connect } from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import { addDateToDayPicker, resetDate } from '../ac'
import 'react-day-picker/lib/style.css'

class DayPickerComponent extends Component {
  static defaultProps = {
    numberOfMonths: 8
  }
  constructor(props) {
    super(props)
    this.handleDayClick = this.handleDayClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.state = this.getInitialState()
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined
    }
  }
  handleDayClick(day) {
    const { addDateToDayPicker } = this.props
    const range = DateUtils.addDayToRange(day, this.state)
    addDateToDayPicker(range)
    this.setState(range)
  }

  handleResetClick() {
    console.log('RESET')
    this.props.resetDate()
    this.setState(this.getInitialState())
  }
  render() {
    const { from, to } = this.state
    // console.log(from, to)
    const modifiers = { start: from, end: to }
    return (
      <div className="RangeExample">
        <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from &&
            to && (
              <button className="link" onClick={this.handleResetClick}>
                Reset
              </button>
            )}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
      </div>
    )
  }
}

export default connect(
  null,
  { addDateToDayPicker, resetDate }
)(DayPickerComponent)
