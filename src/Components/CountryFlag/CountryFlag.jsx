import React from 'react';
import { Table } from 'reactstrap';

function CountryFlag({ results }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Flag</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.name}>
            <td>{result.name}</td>
            <td>
              <img
                style={{ width: '100px', height: '100px' }}
                src={result.flag}
                alt={result.country}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CountryFlag;
