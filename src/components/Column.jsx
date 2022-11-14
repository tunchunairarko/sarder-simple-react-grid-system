import React from 'react'
import PropTypes from 'prop-types'

const Column = ({children, xs, sm, md, lg, xl, xxl, className}) => {
  const colSize = xs || sm || md || lg || xl || xxl || 12
  return <div className={`sd_col-${colSize}`}>{children}</div>;
}

Column.propTypes = {
  children: PropTypes.node,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xxl: PropTypes.number,
  className: PropTypes.string,
};

Column.defaultProps = {
    children: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
    className: '',
}

export default Column