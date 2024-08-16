import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Item = ({ id, category, image, price, title, rating }) => {
  const { rate, count } = rating
  return (
    <Wrapper>
      <article>
        <img src={image} alt={title} className='img' />
        <div className='info'>
          <h3>{title.slice(0, 12)}</h3>
          <p>{rate}</p>
          <p className='category'>{category}</p>
        </div>
        <Link className='btn' to={`/item/${id}`}>
          Details
        </Link>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  article {
    background: var(--white);
    box-shadow: var(--shadow-2);
    padding: 2rem;
    transition: var(--transition);
    border-radius: 5px;
  }
  article:hover {
    box-shadow: var(--shadow-4);
  }

  img {
    height: 15rem;
    object-fit: scale-down;
    margin-bottom: 1.2rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 1.4rem;
  }
  h3 {
    font-weight: 700;
  }

  .category {
    color: var(--grey-500);
    font-weight: 500;
  }
`

export default Item
