import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { View } from '../../index';

/**
 * A HorizontalPager page. This component is used in
 * HorizontalPager in order to prevent unnecessary
 * rendering of pages that are not currently visible.
 */
export class Page extends Component {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    width: PropTypes.number.isRequired,
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
    ]),
    children: PropTypes.node,
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.isActive;
  }

  render() {
    const {
      width,
      style,
      children,
    } = this.props;

    return (
      <View
        virtual
        style={{ ...style, width }}
      >
        {children}
      </View>
    );
  }
}
