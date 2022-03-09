import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'

import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

/*
 * Feedback Item component
 *
 * @param {item} object
 * @param {handleDelete} function
 * @return <Card> component
 */

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{ item.rating }</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{ item.text }</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem