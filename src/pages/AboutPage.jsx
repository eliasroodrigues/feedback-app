import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

/*
 * About Page component
 *
 * @return <Card> About page
 */

function AboutPage() {
  return (
    <Card className='about'>
      <h1>About This Project</h1>
      <p>This is a React app to leave feedback for a product or service</p>
      <p>Version: 1.0.0</p>

      <p>
        <Link to='/'>Back To Home</Link>
      </p>
    </Card>
  )
}

export default AboutPage