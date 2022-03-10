import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

/*
 * About Icon Link component
 *
 * @return <div> Link to /about
 */

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to={{
        pathname: '/about',
      }}>
        <FaQuestion size={ 30 } />
      </Link>
    </div>
  )
}

export default AboutIconLink