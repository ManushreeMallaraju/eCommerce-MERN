import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
    const [products, setProducts] = useState({})

    useEffect(() => {
        //here axios req to load the products on the front-end;
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')

            setProducts(data);
        }

        fetchProducts();
    }, [])

    // render nothing during the time product is loading
    if (!products) return null;

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {/* TODO:Cannot use .map on the object -> products is an objects */}
                {products.map(product => ( /**Map through the products and pass each product to the Product Comp */
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen

//component level state -> products, users -> for now using useEffect() (But, needs to be in the global state when used redux)
//In class components, we can define in the constructor, but here we can use useState
// [products, setProducts] -> 1st param what we need to call the piece of state, to manupilate the products

//useEffect hook makes the req to the backend -> whatever we put inside useEffect runs as soons as the component loads

//Note: in case front-end starts on localhost:3000, server on :5000, we can add the same URL in the FE, but then get blocked by CORS.
//Instead we can use, proxy -> to look 3000-> 5000