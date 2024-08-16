import React from 'react'
import ItemCard from '../components/ItemCard'
import styled from 'styled-components'
const ItemList = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item) => {
        return <ItemCard key={item.id} {...item} />
      })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`
export default ItemList
