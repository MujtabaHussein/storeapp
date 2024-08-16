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
  .logo {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--primary-600);
    letter-spacing: 2px;
  }
  nav {
    display: flex;
    gap: 1.2rem;
  }
  nav a {
    color: var(--grey-700);
    letter-spacing: 1px;
  }
`
export default Navbar
