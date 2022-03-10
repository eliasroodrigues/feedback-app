import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()
const PROXY = "http://localhost:5000"

/*
 * Feefback Context
 *
 * @param {children} noe
 *
 * @return <Provider>
 */

export const FeedbackProvider = ({ children }) => {
  // to show a loading image
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  // whatever the item we want to update, the bool indicates
  // if we are editing it (true) or not (false)
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // fetch the data when the page is loaded
  useEffect(() => {
    fetchFeedback()
  }, [])

  // fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(
      `${PROXY}/feedback?_sort=id&_order=desc`
    )
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

  // to add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch(
      `${PROXY}/feedback`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback),
      }
    )

    const data = await response.json()

    setFeedback([data, ...feedback])
  }

  // to delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(
        `${PROXY}/feedback/${id}`,
        {
          method: 'DELETE'
        }
      )

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // to update feedback
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(
      `${PROXY}/feedback/${id}`,
      {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updItem)
      }
    )

    const data = await response.json()

    setFeedback(feedback.map((item) => (item.id === id ? {
      ...item, ...data } : item))
    )
  }

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider value={{
      feedback,
      feedbackEdit,
      isLoading,
      deleteFeedback,
      addFeedback,
      editFeedback,
      updateFeedback,
    }}>
      { children }
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext