import React from 'react'
import { useNavigation } from 'react-router-dom'
import styled from 'styled-components'

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation()
  const isSearching = navigation.state === 'submitting'

  return (
    <Wrapper>
      <form>
        <input
          className='form-input'
          type='search'
          name='search'
          defaultValue={searchTerm}
        />
        <button type='submit' className='btn'>
          {isSearching ? 'Searching...' : 'Search'}
        </button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem auto;
    max-width: var(--fixed-width);
    padding: 2rem 1.4rem;
    box-shadow: var(--shadow-3);
    border-radius: 5px;
  }

  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export default SearchForm
