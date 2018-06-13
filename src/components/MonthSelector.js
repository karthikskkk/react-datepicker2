import React, { Component } from 'react';
import PropTypes from "prop-types";
import moment from 'moment';
import classnames from 'classnames';
import MonthsViewHeading from './MonthsViewHeading';
import { leftArrow, rightArrow } from '../utils/assets';

const monthsGregorian = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export default class MonthSelector extends Component {
  static propTypes = {
    styles: PropTypes.object,
    selectedMonth: PropTypes.object.isRequired
  };

  static contextTypes = {
    setCalendarMode: PropTypes.func.isRequired,
    setMonth: PropTypes.func.isRequired
  };

  state = {
    year: this.props.selectedMonth
  };

  nextYear() {
    this.setState({
      year: this.state.year.clone().add(1, 'year')
    });
  }

  prevYear() {
    this.setState({
      year: this.state.year.clone().subtract(1, 'year')
    });
  }

  handleClick(key) {
    const { setMonth, setCalendarMode } = this.context;
    const monthYearFormat= 'M-YYYY';
    setMonth(moment(key, monthYearFormat));
    setCalendarMode('days');
  }

  render() {
    const { year } = this.state;
    const { selectedMonth, styles } = this.props;
              const yearFormat= 'YYYY';
    const monthYearFormat= 'M-YYYY';
    const months=monthsGregorian;

    return (
      <div className="month-selector">
        <MonthsViewHeading
          styles={styles}
          year={year}
          onNextYear={this.nextYear.bind(this) }
          onPrevYear={this.prevYear.bind(this) }
        />
        <div className={styles.monthsList}>
          {
            months.map((name, key) => {
              const buttonFingerprint = (key + 1) + '-' + year.format(yearFormat);
              const selectedMonthFingerprint = selectedMonth.format(monthYearFormat);
              const isCurrent = selectedMonthFingerprint === buttonFingerprint;

              const className = classnames(styles.monthWrapper, {
                [styles.selected]: isCurrent
              });

              return (
                <div key={key} className={className}>
                  <button onClick={this.handleClick.bind(this, buttonFingerprint)}>
                    {name}
                  </button>
                </div>
              );
            })
          }
        </div>
      </div>);
  }
}
