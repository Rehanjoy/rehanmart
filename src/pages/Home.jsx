import React, {useState,useEffect} from 'react'

import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../../src/assets/images/hero-img.png'
import '../styles/Home.css'
import Services from '../services/Services'
import ProductList from '../components/UI/ProductList'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock'



const Home = () => {

  const [trendingProducts, settrendingProducts]= useState([]);
  const [bestSalesProducts, setBestSalesProducts]= useState([]);
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year =new Date().getFullYear()

useEffect(()=>{
  const filtredtrendingProducts = products.filter(
  // eslint-disable-next-line eqeqeq
  item=>item.category=='chair');
  
  const filtredbestSalesProducts = products.filter(
    // eslint-disable-next-line eqeqeq
    item=>item.category=='sofa');

    const filtredMobileProducts = products.filter(
      // eslint-disable-next-line eqeqeq
      item=>item.category=='Bed');

      const filtredWirelessProducts = products.filter(
        // eslint-disable-next-line eqeqeq
        item=>item.category=='Wardrobe');
    
        const filtredPopularProducts = products.filter(
          // eslint-disable-next-line eqeqeq
          item=>item.category=='Dining Set');

  settrendingProducts(filtredtrendingProducts);
  setBestSalesProducts(filtredbestSalesProducts)
  setMobileProducts(filtredMobileProducts)
  setWirelessProducts(filtredWirelessProducts)
  setPopularProducts(filtredPopularProducts)
},[]);

  return <Helmet title={'Home'}>
    <section className='hero__section'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
        <div className="hero__content">
          <p className="hero__subtitle">Trending product in {year}</p>
        <h2>Make Your Interior More Minimalistic & Modern</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae velit porro officiis non ratione cum harum error exercitationem. Numquam sed molestias commodi non, debitis ea dolores cum praesentium asperiores nam.</p>

        <motion.button whileTap={{scale:1.2}} 
        className='buy__btn'> <Link to ='/shop'>SHOP NOW</Link>
        </motion.button  >
        </div>


        </Col>
        <Col lg='6' md='6'>
          <div className="hero__img">
            <img src={heroImg} alt="hero-img"  />
          </div>
        </Col>
      </Row>
    </Container>
    </section>

    <Services/>

    <section className='new__arrivals'>
    <Container>
      <Row>
        <Col lg='12' className='text-center mb-5'>
        <h2 className='section__title'>New Arrivals</h2>
        </Col>
        <ProductList data={mobileProducts}/>
        <ProductList data={wirelessProducts}/>
      </Row>
    </Container>
  </section>


  <section className='popular__category'>
  <Container>
    <Row>
      <Col lg='12' className='text-center mb-5'>
        <h2 className='section__title'>Popular in Category</h2>
      </Col>
      <ProductList data={popularProducts}/>
    </Row>
  </Container>
  </section>


  <section className='time__count'>
  <Container>
      <Row>

        <Col lg='6' md='12' className='count__down-col'>
          <div className="clock__top-content">
            <h4 className='text-white fs-6 mb-2 mx-3'  >Limited Offers</h4>
            <h3 className='text-white fs-5 mb-3 mx-3'  >Quality Armchair</h3>
          </div>
          <Clock/>
          <motion.button
          whileTap={{scale:1.2}}
          className='buy__btn store__btn mx-3'>
            <Link to='/shop'>Visit Store</Link>
          </motion.button>
        </Col>
        <Col lg='6' md='12' className='text-end counter__img'>
          <img src={counterImg} alt="" />
        </Col>
        
      </Row>
    </Container>
  </section>


  <section className='trending__products'>
    <Container>
      <Row>
        <Col lg='12' className='text-center'>
          <h2 className='section__title'>Trending Products</h2>
        </Col>
      <ProductList data={trendingProducts}/>
      </Row>
    </Container>
  </section>

  <section className="best__sales">
  <Container>
      <Row>
        <Col lg='12' className='text-center'>
          <h2 className='section__title'>Best Sales</h2>
        </Col>
        <ProductList data={bestSalesProducts}/>
      </Row>
    </Container>
  </section>


    </Helmet>
}

export default Home








// import React, {useState,useEffect} from 'react'

// import {motion} from 'framer-motion'
// import {Link} from 'react-router-dom'
// import Helmet from '../components/Helmet/Helmet'
// import { Container, Row, Col } from 'reactstrap'
// import heroImg from '../../src/assets/images/hero-img.png'
// import '../styles/Home.css'
// import Services from '../services/Services'
// import ProductList from '../components/UI/ProductList'

// import counterImg from '../assets/images/counter-timer-img.png'
// import Clock from '../components/UI/Clock'
// import useGetData from '../custom-hooks/useGetData'


// const Home = () => {

//   const {data: products, loading } = useGetData('products')

//   const [trendingProducts, settrendingProducts]= useState([]);
//   const [bestSalesProducts, setBestSalesProducts]= useState([]);
//   const [mobileProducts, setMobileProducts] = useState([])
//   const [wirelessProducts, setWirelessProducts] = useState([])
//   const [popularProducts, setPopularProducts] = useState([])

//   const year =new Date().getFullYear()

// useEffect(()=>{
//   const filtredtrendingProducts = products.filter(
//   // eslint-disable-next-line eqeqeq
//   item=>item.category=='chair');
  
//   const filtredbestSalesProducts = products.filter(
//     // eslint-disable-next-line eqeqeq
//     item=>item.category=='sofa');

//     const filtredMobileProducts = products.filter(
//       // eslint-disable-next-line eqeqeq
//       item=>item.category=='mobile');

//       const filtredWirelessProducts = products.filter(
//         // eslint-disable-next-line eqeqeq
//         item=>item.category=='wireless');
    
//         const filtredPopularProducts = products.filter(
//           // eslint-disable-next-line eqeqeq
//           item=>item.category=='watch');

//   settrendingProducts(filtredtrendingProducts);
//   setBestSalesProducts(filtredbestSalesProducts)
//   setMobileProducts(filtredMobileProducts)
//   setWirelessProducts(filtredWirelessProducts)
//   setPopularProducts(filtredPopularProducts)
// },[products]);

//   return <Helmet title={'Home'}>
//     <section className='hero__section'>
//     <Container>
//       <Row>
//         <Col lg='6' md='6'>
//         <div className="hero__content">
//           <p className="hero__subtitle">Trending product in {year}</p>
//         <h2>Make Your Interior More Minimalistic & Modern</h2>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae velit porro officiis non ratione cum harum error exercitationem. Numquam sed molestias commodi non, debitis ea dolores cum praesentium asperiores nam.</p>

//         <motion.button whileTap={{scale:1.2}} 
//         className='buy__btn'> <Link to ='/shop'>SHOP NOW</Link>
//         </motion.button  >
//         </div>


//         </Col>
//         <Col lg='6' md='6'>
//           <div className="hero__img">
//             <img src={heroImg} alt="hero-img"  />
//           </div>
//         </Col>
//       </Row>
//     </Container>
//     </section>

//     <Services/>

//   <section className='trending__products'>
//     <Container>
//       <Row>
//         <Col lg='12' className='text-center'>
//           <h2 className='section__title'>Trending Products</h2>
//         </Col>
//         {
//           loading ? <h5 className='fw-bold'>Loading....</h5> :
//           <ProductList data={trendingProducts}/>  
//         }

      
//       </Row>
//     </Container>
//   </section>

//   <section className="best__sales">
//   <Container>
//       <Row>
//         <Col lg='12' className='text-center'>
//           <h2 className='section__title'>Best Sales</h2>
//         </Col>

//         {
//           loading ? <h5 className='fw-bold'>Loading....</h5> :
//           <ProductList data={bestSalesProducts}/>  
//         }

        
//       </Row>
//     </Container>
//   </section>
//   <section className='time__count'>
//   <Container>
//       <Row>

//         <Col lg='6' md='12' className='count__down-col'>
//           <div className="clock__top-content">
//             <h4 className='text-white fs-6 mb-2 mx-3'  >Limited Offers</h4>
//             <h3 className='text-white fs-5 mb-3 mx-3'  >Quality Armchair</h3>
//           </div>
//           <Clock/>
//           <motion.button
//           whileTap={{scale:1.2}}
//           className='buy__btn store__btn mx-3'>
//             <Link to='/shop'>Visit Store</Link>
//           </motion.button>
//         </Col>
//         <Col lg='6' md='12' className='text-end counter__img'>
//           <img src={counterImg} alt="" />
//         </Col>
        
//       </Row>
//     </Container>
//   </section>

//   <section className='new__arrivals'>
//     <Container>
//       <Row>
//         <Col lg='12' className='text-center mb-5'>
//         <h2 className='section__title'>New Arrivals</h2>
//         </Col>
        
//         {
//           loading ? <h5 className='fw-bold'>Loading....</h5> :
//           <ProductList data={mobileProducts}/>  
//         }
//         {
//           loading ? <h5 className='fw-bold'>Loading....</h5> :
//           <ProductList data={wirelessProducts}/>  
//         }

//       </Row>
//     </Container>
//   </section>

//   <section className='popular__category'>
//   <Container>
//     <Row>
//       <Col lg='12' className='text-center mb-5'>
//         <h2 className='section__title'>Popular in Category</h2>
//       </Col>
//       <ProductList data={popularProducts}/>
//     </Row>
//   </Container>
//   </section>
//     </Helmet>
// }

// export default Home