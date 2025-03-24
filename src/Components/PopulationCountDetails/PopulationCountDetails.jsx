import React from 'react';
import { Table } from 'reactstrap';

export default function PopulationCountDetails({
  city,
  country,
  populationCount,
}) {
  return (
    <Table dark>
      <thead>
        <tr>
          <th>City</th>
          <th>Country</th>
          <th>Population</th>
          <th>Year</th>
          <th>Sex</th>
          <th>Reliability</th>
        </tr>
      </thead>
      <tbody>
        {populationCount.map((count) => (
          <tr>
            <td>{city}</td>
            <td>{country}</td>
            <td>{count.value}</td>
            <td>{count.year}</td>
            <td>{count.sex}</td>
            <td>{count.reliabilty}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
