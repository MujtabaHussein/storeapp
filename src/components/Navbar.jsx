import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Wrapper>
      <p className='logo'>MojStore</p>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/newsletter'>NewsLetter</NavLink>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--view-width);
  max-width: var(--max-width);
  margin: 2rem auto;
  padding: 1.4rem 0.5rem;
  /* background: red; */

  .logo {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--primary-600);
    letter-spacing: 2px;
  }
  nav {
    display: flex;
    gap: 1.2rem;
    /* background: yellow; */
  }
  nav a {
    color: var(--grey-700);
    letter-spacing: 1px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    gap: 2rem;
    /* justify-content: start; */
    nav {
      flex-direction: row;
      justify-content: start;
    }
  }
`
export default Navbar
