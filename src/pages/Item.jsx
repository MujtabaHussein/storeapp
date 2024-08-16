import axios from 'axios'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import styled from 'styled-components'

const url = 'https://fakestoreapi.com/products'

export const loader = async ({ params }) => {
  const { id } = params
  const { data } = await axios.get(`${url}/${id}`)
  return { id, data }
}
const Item = () => {
  const { id, data } = useLoaderData()
  const { title, price, description, category, image, rating } = data
  return (
    <Wrapper>
      <Link className='btn' to={'/'}>
        Back home
      </Link>
      <h3>{title}</h3>
      <div className='item-container'>
        <img src={image} alt={title} className='img' />
        <div className='item-info'>
          <div>
            <span className='tag'>Name: </span>
            {title}
          </div>
          <div>
            <span className='tag'>Category: </span> {category}
          </div>
          <div>
            <span className='tag'>Price: </span> {price}$
          </div>
          <div>
            <span className='tag'>description: </span>
            {description}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  .item-container {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }
  .item-info {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    line-height: 1.5;
  }
  .img {
    height: 70vh;
    object-fit: scale-down;
  }
  .tag {
    background: var(--primary-400);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    margin-right: 0.5rem;
  }

  @media (max-width: 992px) {
    .item-container {
      flex-direction: column;
    }
  }
`

export default Item
