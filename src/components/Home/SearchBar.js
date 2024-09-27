import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa'; // Using react-icons for the search icon

// Styled Components
const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 50px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: fit-content;
  margin: 20px auto;
`;

const SearchItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-right: 1px solid #ddd;
  &:last-child {
    border-right: none;
  }
`;

const Label = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
`;

const PlaceholderText = styled.span`
  font-size: 14px;
  color: #888;
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff385c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-left: 10px;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 18px;
`;

// Main Component
const SearchBar = () => {
  return (
    <SearchBarContainer>
      {/* Where Section */}
      <SearchItem>
        <Label>Where</Label>
        <PlaceholderText>Search destinations</PlaceholderText>
      </SearchItem>

      {/* Check-in Section */}
      <SearchItem>
        <Label>Check in</Label>
        <PlaceholderText>Add dates</PlaceholderText>
      </SearchItem>

      {/* Check-out Section */}
      <SearchItem>
        <Label>Check out</Label>
        <PlaceholderText>Add dates</PlaceholderText>
      </SearchItem>

      {/* Guests Section */}
      <SearchItem>
        <Label>Who</Label>
        <PlaceholderText>Add guests</PlaceholderText>
      </SearchItem>

      {/* Search Button */}
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
