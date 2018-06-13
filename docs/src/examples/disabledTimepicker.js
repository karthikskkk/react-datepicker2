import React from 'react'
import moment from 'moment'
import DatePicker from '../../../src/components/DatePicker';
import createReactClass from "create-react-class";

const component = createReactClass({
  getInitialState() {
    return {
      value: moment()
    }
  },
  render() {
    return <DatePicker
      timePicker={false}
      value={this.state.value}
      onChange={value => this.setState({ value })}
    />
  }
});

const title = 'Disabled Timepicker';
const code = `const component = createReactClass({
  getInitialState() {
    return {
      value: moment()
    }
  },
  render() {
    return <DatePicker
      timePicker={false}
      value={this.state.value}
      onChange={value => this.setState({ value })}
    />
  }
});
`;
const DisabledTimepicker = { component, title, code };
export default DisabledTimepicker;
