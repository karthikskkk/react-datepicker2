import React, { Component } from 'react';
import PropTypes from "prop-types";

// Day of week names for use in date-picker heading
const dayOfWeekNamesGregorian = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default class DaysOfWeek extends Component {
  static propTypes = {
    styles: PropTypes.object
  };

  render() {
    const { styles } = this.props;

    const dayOfWeekNames = dayOfWeekNamesGregorian;

    return (
      <div className={styles.daysOfWeek}>
        {dayOfWeekNames.map((name, key) => <div key={key}>{name}</div>)}
      </div>
    );
  }
}
