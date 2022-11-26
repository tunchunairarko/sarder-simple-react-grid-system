import React from 'react'
import PropTypes from 'prop-types'

const Column = ({children, xs, sm, md, lg, xl, xxl, style, className}) => {
  const generateClass = () => {
    let classString = 'sd_col';
    if (xs) classString += ` sd_col-xs-${xs}`
    if (sm) classString += ` sd_col-sm-${sm}`
    if (md) classString += ` sd_col-md-${md}`
    if (lg) classString += ` sd_col-lg-${lg}`
    if (xl) classString += ` sd_col-xl-${xl}`
    if (xxl) classString += ` sd_col-xxl-${xxl}`
    return classString.trim()
  }

  return (
    <div
      style={style}
      className={`${generateClass()}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
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
  style: PropTypes.object,
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
    style: {},
}

export default Column