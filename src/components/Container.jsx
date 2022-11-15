import React from 'react'
import PropTypes from 'prop-types'

const Container = ({children, fluid, className}) => {
  const prefix = "sd_container";
  const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
  return (
    <div className={`${fluid ? `${prefix}${suffix}` : prefix}${className ? ` ${className}`:''}`}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.oneOf(PropTypes.bool, PropTypes.string),
  className: PropTypes.string,
};

Container.defaultProps = {
    children: null,
    fluid: false,
    className: '',
}

export default Container