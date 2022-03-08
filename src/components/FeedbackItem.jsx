import PropTypes from 'prop-types'

import Card from './shared/Card'

/*
 * Feedback Item component
 *
 * @param {item} object
 * @return <Card> component
 */

function FeedbackItem({ item }) {
  return (
    <Card>
      <div className='num-display'>{ item.rating }</div>
      <div className='text-display'>{ item.text }</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem