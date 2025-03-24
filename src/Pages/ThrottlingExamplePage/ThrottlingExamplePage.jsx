import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { getCountryFlag } from '../../services/countriesFlagService';

import CountryFlag from '../../Components/CountryFlag/CountryFlag';
import useThrottled from '../../Hooks/useThrottled';

function ThrottlingExamplePage() {
  const [refreshTrigger, setRefreshTrigger] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const throttledRefreshTrigger = useThrottled(refreshTrigger, 1000); // 1 second throttle

  useEffect(() => {
    if (throttledRefreshTrigger) {
      setLoading(true);
      setError(null);
      getCountryFlag()
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setResults([]);
    }
  }, [throttledRefreshTrigger]);

  return (
    <Container>
      <Row>
        <Col lg={12} className='d-flex justify-content-center mt-4 mb-4'>
          <Button
            onClick={() => setRefreshTrigger(Date.now())}
            color='primary'
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Refresh'}
          </Button>
        </Col>
      </Row>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className='text-danger'>{error}</p>
      ) : results?.length > 0 ? (
        <Row>
          <Col>
            <CountryFlag results={results} />
          </Col>
        </Row>
      ) : null}
    </Container>
  );
}

export default ThrottlingExamplePage;
