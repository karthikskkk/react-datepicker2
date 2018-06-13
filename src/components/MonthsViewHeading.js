import React, { Component } from 'react';
import PropTypes from "prop-types";
import { persianNumber } from '../utils/persian';
import { leftArrow, rightArrow } from '../utils/assets';

export default class MonthsViewHeading extends Component {
  static propTypes = {
    year: PropTypes.object.isRequired,
    onNextYear: PropTypes.func.isRequired,
    onPrevYear: PropTypes.func.isRequired
  };

  static contextTypes = {
    styles: PropTypes.object,
    type: PropTypes.number
  };

  render() {
    const { year, styles, type } = this.props;

    const yearFormat = 'YYYY';

    return (
      <div className={styles.heading}>
        <span className={styles.title}>
          {year.format(yearFormat)}
        </span>
        <button
          type="button"
          title={"before year"}
          style={styles.navButton}
          className={styles.prev}
          onClick={this.props.onPrevYear}
          dangerouslySetInnerHTML={rightArrow}
        />
        <button
          type="button"
          title={"next year"}
          style={styles.navButton}
          className={styles.next}
          onClick={this.props.onNextYear}
          dangerouslySetInnerHTML={leftArrow}
        />
      </div>
    );
  }
}
