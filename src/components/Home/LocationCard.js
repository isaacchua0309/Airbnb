// LocationCard.js
import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

// Styled Components
const CardContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageSlider = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ddd;
  position: relative;
`;

const FavoriteIcon = styled(FaHeart)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ff385c;
  cursor: pointer;
`;

const DetailsContainer = styled.div`
  padding: 10px;
`;

const LocationTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 5px 0;
`;

const HostName = styled.p`
  color: #888;
  font-size: 14px;
`;

const Pricing = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
`;

const TotalCost = styled.p`
  font-size: 12px;
  color: #888;
  text-decoration: underline;
`;

const LocationCard = ({ location }) => {
  return (
    <CardContainer>
      <ImageSlider>
        {/* Placeholder for image */}
        <FavoriteIcon />
      </ImageSlider>
      <DetailsContainer>
        <LocationTitle>{location.title}</LocationTitle>
        <HostName>Hosted by {location.host}</HostName>
        <Pricing>{location.price} SGD night</Pricing>
        <TotalCost>{location.totalCost} SGD total</TotalCost>
      </DetailsContainer>
    </CardContainer>
  );
};

export default LocationCard;
