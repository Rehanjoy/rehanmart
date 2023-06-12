import React, { useState } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductList'

const Shop = () => {

const [productData, setProductData] = useState(products)

const handleFilter = (e) =>{
  const filterValue = e.target.value;
  if(filterValue==='sofa'){
    const filteredProducts = products.filter(
      (item)=> item.category==='sofa'
    )

    setProductData(filteredProducts)
  } 

  if(filterValue==='mobile'){
    const filteredProducts = products.filter(
      (item)=> item.category==='mobile'
    )

    setProductData(filteredProducts)
  } 

  if(filterValue==='chair'){
    const filteredProducts = products.filter(
      (item)=> item.category==='chair'
    )

    setProductData(filteredProducts)
  } 

  if(filterValue==='wireless'){
    const filteredProducts = products.filter(
      (item)=> item.category==='wireless'
    )

    setProductData(filteredProducts)
  } 

  if(filterValue==='watch'){
    const filteredProducts = products.filter(
      (item)=> item.category==='watch'
    )

    setProductData(filteredProducts)
  } 
}

const handleSearch = e =>{
  const searchTerm = e.target.value

  const searchedProduct = products.filter(item=>item.productName.
    toLowerCase().includes(searchTerm.toLowerCase()))

    setProductData(searchedProduct)
}
  return (
    <Helmet title="Shop">
      <CommonSection title='Products' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className="filter__widget">
                  <select onClick={handleFilter}>
                  <option>Filter By Category</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="chair">Chair</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
            <div className="filter__widget">
                  <select>
                    <option>Sort By</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>

                  </select>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="search__box">
                <input type="text" placeholder='Search........' onChange={handleSearch} />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productData.length===0? (<h1 className='text-center fs-4'>NO Products Are Found!</h1>)
              
            :
              (<ProductsList data={productData}/>)
            }
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Shop