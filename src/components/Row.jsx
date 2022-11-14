import React from 'react'
import PropTypes from 'prop-types'

const Row = ({
  children,
  align,
  justify,
  wrap, className
}) => {
  const defaultStyles = {
    align,
    justify,
    wrap
  }
  return <div style={defaultStyles} className="sd_row">{children}</div>;
};

Row.propTypes = {
  children: PropTypes.node,
  wrap: PropTypes.oneOf(["nowrap", "wrap", "reverse"]),
  justify: PropTypes.oneOf([
    "start",
    "center",
    "end",
    "between",
    "around",
    "initial",
    "inherit",
  ]),
  align: PropTypes.oneOf(["normal", "start", "center", "end", "stretch"]),
  className: PropTypes.string,
};

Row.defaultProps = {
  children: null,
  align: 'normal',
  justify: 'start',
  wrap: 'wrap',
  className: '',
}

export default Row