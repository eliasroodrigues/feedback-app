import PropTypes from 'prop-types'

/*
 * Card component
 *
 * @param {children} node
 * @param {reverse} bool
 * @return <div>
 */

function Card({ children, reverse }) {
  return <div className={`card ${reverse && 'reverse'}`}>{ children }</div>
}

Card.defaultProps = {
  reverse: false,
}

Card.protoTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card