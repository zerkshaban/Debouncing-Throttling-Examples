import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { getCityPopulation } from '../../services/populationService';

import PopulationCountDetails from '../../Components/PopulationCountDetails/PopulationCountDetails';
import useDebounce from '../../Hooks/useDebounce';

import './DebouncingExamplePage.scss';

function DebouncingExamplePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debouncedSearchTerm = useDebounce(searchQuery, 500); // 500ms delay

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      setError(null);
      getCityPopulation(debouncedSearchTerm)
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setResults(null);
    }
  }, [debouncedSearchTerm]);

  return (
    <Container>
      <Row>
        <Col lg={12} className='d-flex justify-content-center'>
          <Form>
            <FormGroup className='form-group'>
              <Label for='search'>
                <h3>Search</h3>
              </Label>
              <Input
                className='search-input'
                type='text'
                id='search'
                value={searchQuery}
                placeholder='London'
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </FormGroup>
          </Form>
        </Col>
      </Row>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className='text-danger'>{error}</p>
      ) : results?.populationCounts?.length > 0 ? (
        <Row>
          <Col>
            <PopulationCountDetails
              city={results.city}
              country={results.country}
              populationCount={results.populationCounts}
            />
          </Col>
        </Row>
      ) : null}
    </Container>
  );
}

export default DebouncingExamplePage;
