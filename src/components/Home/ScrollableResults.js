// ScrollableResults.js
import React, { useState } from 'react';
import styled from 'styled-components';
import LocationsGrid from './LocationsGrid';

// Styled Components
const ScrollableContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const ShowMoreButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  margin: 20px auto;
  display: block;
  text-align: center;

  &:hover {
    background-color: #555;
  }
`;

const Message = styled.div`
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
`;

const ScrollableResults = ({ locations }) => {
  const [visibleCount, setVisibleCount] = useState(8); // Initial limit of 8 locations

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Add 8 more items each time
  };

  // Display only the locations based on the visible count
  const visibleLocations = locations.slice(0, visibleCount);

  return (
    <ScrollableContainer>
      <LocationsGrid locations={visibleLocations} />

      {/* Only show the "Show More" button if there are more locations to display */}
      {visibleCount < locations.length && (
        <>
          <Message>Continue exploring minus</Message>
          <ShowMoreButton onClick={handleShowMore}>
            Show more
          </ShowMoreButton>
        </>
      )}
    </ScrollableContainer>
  );
};

export default ScrollableResults;
