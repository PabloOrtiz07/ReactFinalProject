import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import '../home.css';
import fetchProducts from '../fetchProducts';

const Home = () => {
  const { currentUser, logout } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };

    loadProducts();
  }, []);

  return (
    <Container className="home">
      {currentUser ? (
        <>
          <h1 className="mt-5 title">Welcome, {currentUser.email}</h1>
          <Button className="logout title" onClick={logout}>Logout</Button>
          <h2 className="mt-4 title">Products</h2>
          <Carousel>
            {products.map((product) => (
              <Carousel.Item key={product.id}>
                <Row className="align-items-center">
                  <Col sm={4}>
                    <img
                      className="d-block w-100"
                      src={product.image}
                      alt={product.name}
                    />
                  </Col>
                  <Col sm={8}>
                    <div>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <p>Price: ${product.price}</p>
                      <Button variant="primary">Buy Now</Button>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </>
      ) : (
        <p>Please log in to view this page.</p>
      )}
    </Container>
  );
};

export default Home;
