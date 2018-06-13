import React from 'react'
import moment from 'moment'
import DatePicker from '../../src';
import createReactClass from "create-react-class";

export default createReactClass({
  getInitialState() {
    return {
      value: moment()
    }
  },
  render() {
    return <DatePicker
      onChange={value => this.setState({ value })}
      value={this.state.value}
    />
  }
})
