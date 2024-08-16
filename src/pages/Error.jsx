import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'
import styled from 'styled-components'
const Error = () => {
  const error = useRouteError()
  if (error.status == '404') {
    return (
      <Wrapper>
        <img src={img} alt='not found' />
        <h3>Oh sorry!</h3>
        <p>we can't seem to find the page you're looking for!</p>
        <Link to='/' className='btn'>
          Back home
        </Link>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h3>Something went wrong</h3>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 80vw;
    max-width: 600px;
    margin-bottom: 2.4rem;
  }
  h3 {
    color: var(--grey-800);
    font-weight: 600;
  }
  p {
    color: var(--grey-600);
  }
`

export default Error
