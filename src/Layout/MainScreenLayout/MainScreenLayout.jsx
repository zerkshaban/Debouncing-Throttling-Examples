import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import Header from '../../Pages/Header/Header';

import './MainScreenLayout.scss';

const MainScreenLayout = ({ children }) => {
  const location = useLocation();
  return (
    <Container fluid>
      <Header />
      <h1>{location.pathname === '/' ? 'Debouncing' : 'Throttling'}</h1>
      <Row className='align-content-start justify-content-center align-items-center vh-100'>
        <Col xs={12} className='text-center'>
          {children} {/* Render children instead of <Children /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default MainScreenLayout;
