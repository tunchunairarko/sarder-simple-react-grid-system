import React from 'react'
import PropTypes from 'prop-types'

const Container = ({children, fluid, className}) => {
  return (
    <div className={`sd_container${fluid ? ' sd_container--fluid':''}`}>{children}</div>
  )
}

Container.propTypes = {
    children: PropTypes.node,
    fluid: PropTypes.bool,
    className: PropTypes.string,
}

Container.defaultProps = {
    children: null,
    fluid: false,
    className: '',
}

export default Container