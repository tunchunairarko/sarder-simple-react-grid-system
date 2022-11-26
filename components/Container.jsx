import React from 'react'
import PropTypes from 'prop-types'

const Container = ({children, fluid, className, componentType}) => {
  const prefix = "sd_container";
  const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
  const containerClass = fluid ? `${prefix}${suffix}` : prefix;
  const Component = componentType; // default is div, this is for semantic html
  return (
    <Component className={`${containerClass}${className ? ` ${className}`:''}`}>
      {children}
    </Component>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.oneOf(PropTypes.bool, PropTypes.string),
  className: PropTypes.string,
  componentType: PropTypes.oneOf(['div', 'section']),
};

Container.defaultProps = {
    children: null,
    fluid: false,
    className: '',
    componentType: 'div',
}

export default Container