// LocationsGrid.js
import React from 'react';
import styled from 'styled-components';
import LocationCard from './LocationCard';

// Styled Components
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Dynamic grid based on screen size */
  gap: 20px;
  padding: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Adjust for large tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); /* Adjust for small tablets */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Adjust for mobile */
  }
`;

const LocationsGrid = ({ locations }) => {
  return (
    <GridContainer>
      {locations.map((location, index) => (
        <LocationCard key={index} location={location} />
      ))}
    </GridContainer>
  );
};

export default LocationsGrid;
