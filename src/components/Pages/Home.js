import React, { Fragment } from 'react'
import ProductList from '../Products/ProductList'
import Slider from '../Body/Slider'
import Container from '../UI/Container'

const Home = () => {
  return (
    <Container>
      <Slider/>
      <ProductList/>
    </Container>
  )
}

export default Home