
// add to firebase directly

// import React, { useState, useRef, useEffect } from "react";
// import { Container, Row, Col } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";
// import { useParams } from "react-router-dom";
// import "../styles/product-details.css";
// import { motion } from "framer-motion";
// import ProductsList from "../components/UI/ProductList";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../redux/slices/cartSlice";
// import { toast } from "react-toastify";
// import { db } from "../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import useGetData from "../custom-hooks/useGetData";

// const ProductDetails = () => {
//   const [product, setProduct] = useState({});
//   const [tab, setTab] = useState("desc");
//   const reviewUser = useRef("");
//   const reviewMsg = useRef("");
//   const dispatch = useDispatch();

//   const { rating, setRating } = useState(null);
//   const { id } = useParams();
//   // const product = products.find((item)=>item.id===id)

//   const { data: products } = useGetData("products");
//   const docRef = doc(db, "products", id);

//   useEffect(() => {
//     const getProduct = async () => {
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setProduct(docSnap.data());
//       } else {
//         console.log("no product!");
//       }
//     };
//     getProduct();
//   }, []);

//   const {
//     imgUrl,
//     productName,
//     price,
//     // avgRating, reviews,
//     description,
//     shortDesc,
//     category,
//   } = product;

//   const relatedProducts = products.filter((item) => item.category === category);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     const reviewUserName = reviewUser.current.value;
//     const reviewUserMsg = reviewMsg.current.value;

//     const reviewObj = {
//       userName: reviewUserName,
//       text: reviewUserMsg,
//       rating,
//     };

//     toast.success("Review Submitted");
//     console.log(reviewObj);
//   };

//   const addToCart = () => {
//     dispatch(
//       cartActions.addItem({
//         id,
//         image: imgUrl,
//         productName,
//         price,
//       })
//     );

//     toast.success("Product Added Successfully");
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [product]);

//   return (
//     <Helmet title={productName}>
//       <CommonSection title={productName} />
//       <section className="pt-0">
//         <Container>
//           <Row>
//             <Col lg="6">
//               <img src={imgUrl} alt="" />
//             </Col>
//             <Col lg="6">
//               <div className="product__details">
//                 <h2>{productName}</h2>
//                 <div className="product__rating d-flex align-items-center gap-5 mb-3">
//                   <div>
//                     <span>
//                       <i class="ri-star-s-fill"> </i>
//                     </span>
//                     <span>
//                       <i class="ri-star-s-fill"> </i>
//                     </span>
//                     <span>
//                       <i class="ri-star-s-fill"> </i>
//                     </span>
//                     <span>
//                       <i class="ri-star-s-fill"> </i>
//                     </span>
//                     <span>
//                       <i class="ri-star-half-s-fill"> </i>
//                     </span>
//                   </div>
//                   <p>{/* (<span>{avgRating}</span>ratings) */}</p>
//                 </div>
//                 <div className="d-flex align-items-center gap-4">
//                   <span className="product__price">{price}</span>
//                   <span>Category: {category.toUpperCase()}</span>
//                 </div>
//                 <p className="mt-3">{shortDesc}</p>

//                 <motion.button
//                   whileTap={{ scale: 1.2 }}
//                   className="buy__btn"
//                   onClick={addToCart}
//                 >
//                   Add to Cart
//                 </motion.button>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       <section>
//         <Container>
//           <Row>
//             <Col lg="12">
//               <div className="tab__wrapper d-flex align-items-center gap-5">
//                 <h6
//                   className={`${tab === "desc" ? "active__tab" : ""}`}
//                   onClick={() => setTab("desc")}
//                 >
//                   Description{" "}
//                 </h6>
//                 <h6
//                   className={`${tab === "rev" ? "active__tab" : ""}`}
//                   onClick={() => setTab("rev")}
//                 >
//                   {/* Reviews({reviews.length}) */}
//                 </h6>
//               </div>
//               {tab === "desc" ? (
//                 <div className="tab__content">
//                   <p>{description}</p>
//                 </div>
//               ) : (
//                 <div className="product__review mt-5">
//                   {/* <ul>
//                   {reviews?.map((item, index)=>(
//                 <li key={index} className='mb-3'>
//                   <h6>Rehan</h6>
//                   <span>{item.rating}(review)</span>
//                   <p>{item.text}</p>
//                 </li>))}
//                 </ul> */}

//                   <div className="review__form">
//                     <h4>Leave your experience</h4>
//                     <form action="" onSubmit={submitHandler}>
//                       <div className="form__group">
//                         <input
//                           type="text"
//                           placeholder="Enter Name"
//                           ref={reviewUser}
//                           required
//                         />
//                       </div>
//                       <div className="form__group d-flex align-items-center gap-5">
//                         <motion.span
//                           whileTap={{ scale: 1.2 }}
//                           onClick={() => setRating(1)}
//                         >
//                           <i class="ri-star-s-fill">2</i>
//                         </motion.span>
//                         <motion.span
//                           whileTap={{ scale: 1.2 }}
//                           onClick={() => setRating(2)}
//                         >
//                           <i class="ri-star-s-fill">1</i>
//                         </motion.span>
//                         <motion.span
//                           whileTap={{ scale: 1.2 }}
//                           onClick={() => setRating(3)}
//                         >
//                           <i class="ri-star-s-fill">3</i>
//                         </motion.span>
//                         <motion.span
//                           whileTap={{ scale: 1.2 }}
//                           onClick={() => setRating(4)}
//                         >
//                           <i class="ri-star-s-fill">4</i>
//                         </motion.span>
//                         <motion.span
//                           whileTap={{ scale: 1.2 }}
//                           onClick={() => setRating(5)}
//                         >
//                           <i class="ri-star-s-fill">5</i>
//                         </motion.span>
//                       </div>
//                       <div className="form__group">
//                         <textarea
//                           ref={reviewMsg}
//                           rows={4}
//                           type="text"
//                           placeholder="Review Message..."
//                           required
//                         />
//                       </div>
//                       <button type="submit" className="buy__btn">
//                         Submit
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               )}
//             </Col>
//             <Col lg="12" className="mt-5">
//               <h2 className="related__title">Your Might Also Like</h2>
//             </Col>
//             <ProductsList data={relatedProducts} />
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default ProductDetails;







import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useParams } from "react-router-dom";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import products from "../assets/data/products";
// import { db } from "../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import useGetData from "../custom-hooks/useGetData";

const ProductDetails = () => {
  // const [product, setProduct] = useState({});
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const { rating, setRating } = useState(null);
  const { id } = useParams();
  const product = products.find((item)=>item.id===id)

  // const { data: products } = useGetData("products");
  // const docRef = doc(db, "products", id);

  // useEffect(() => {
  //   const getProduct = async () => {
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       setProduct(docSnap.data());
  //     } else {
  //       console.log("no product!");
  //     }
  //   };
  //   getProduct();
  // }, []);

  const {
    imgUrl,
    productName,
    price,
    avgRating, reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    toast.success("Review Submitted");
    console.log(reviewObj);
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );

    toast.success("Product Added Successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"> </i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"> </i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"> </i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"> </i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-fill"> </i>
                    </span>
                  </div>
                  <p>(<span>{avgRating}</span>ratings)</p>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <span className="product__price">{price}</span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn"
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description{" "}
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <ul>
                  {reviews?.map((item, index)=>(
                <li key={index} className='mb-3'>
                  <h6>Rehan</h6>
                  <span>{item.rating}(review)</span>
                  <p>{item.text}</p>
                </li>))}
                </ul>

                  <div className="review__form">
                    <h4>Leave your experience</h4>
                    <form action="" onSubmit={submitHandler}>
                      <div className="form__group">
                        <input
                          type="text"
                          placeholder="Enter Name"
                          ref={reviewUser}
                          required
                        />
                      </div>
                      <div className="form__group d-flex align-items-center gap-5">
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          onClick={() => setRating(1)}
                        >
                          <i class="ri-star-s-fill">2</i>
                        </motion.span>
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          onClick={() => setRating(2)}
                        >
                          <i class="ri-star-s-fill">1</i>
                        </motion.span>
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          onClick={() => setRating(3)}
                        >
                          <i class="ri-star-s-fill">3</i>
                        </motion.span>
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          onClick={() => setRating(4)}
                        >
                          <i class="ri-star-s-fill">4</i>
                        </motion.span>
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          onClick={() => setRating(5)}
                        >
                          <i class="ri-star-s-fill">5</i>
                        </motion.span>
                      </div>
                      <div className="form__group">
                        <textarea
                          ref={reviewMsg}
                          rows={4}
                          type="text"
                          placeholder="Review Message..."
                          required
                        />
                      </div>
                      <button type="submit" className="buy__btn">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related__title">Your Might Also Like</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
