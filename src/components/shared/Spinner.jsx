import spinner from '../assets/spinner.gif'

/*
 * Spinner component
 *
 * @return <img>
 */

function Spinner() {
  return <img
    src={spinner}
    alt='Loading'
    style={
      { width: '100px',
        margin: 'auto',
        display: 'block' }
    }
  />
}

export default Spinner