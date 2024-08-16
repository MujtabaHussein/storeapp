import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import ItemList from '../components/ItemList'
/* ===============================
Fetching data and API with loader
==================================*/
const categorySearchUrl = 'https://fakestoreapi.com/products/category'
const itemsUrl = 'https://fakestoreapi.com/products'

export const loader = async ({ request }) => {
  const url = new URL(request.url)

  const searchTerm = url.searchParams.get('search') || ''
  if (searchTerm === '') {
    const response = await axios.get(itemsUrl)
    const data = response.data
    return { items: data, searchTerm }
  } else {
    const response = await axios.get(`${categorySearchUrl}/${searchTerm}`)
    const data = response.data
    return { items: data, searchTerm }
  }
}

const Landing = () => {
  const { items, searchTerm } = useLoaderData()

  return (
    <div>
      <SearchForm searchTerm={searchTerm} />
      <ItemList items={items} />
    </div>
  )
}

export default Landing
