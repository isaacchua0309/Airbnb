// InspirationSelector.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const InspirationContainer = styled.div`
  padding: 20px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

const Tab = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  padding-bottom: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  border-bottom: ${(props) => (props.active ? '2px solid black' : 'none')};

  &:hover {
    font-weight: bold;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
`;

const Category = styled.div`
  font-size: 14px;
`;

const InspirationSelector = () => {
  const [activeTab, setActiveTab] = useState('Popular');

  const categories = {
    Popular: [
      { title: 'Canmore', type: 'Flat rentals' },
      { title: 'Benalmádena', type: 'Beach house rentals' },
      { title: 'Marbella', type: 'Beach house rentals' },
      { title: 'Mijas', type: 'House rentals' },
      { title: 'Prescott', type: 'Cottage rentals' },
      // Add more as needed
    ],
    'Arts & culture': [
      // Add categories related to Arts & culture
    ],
    Outdoors: [
      // Add categories related to Outdoors
    ],
    // Add other tabs
  };

  return (
    <InspirationContainer>
      {/* Tabs */}
      <Tabs>
        {Object.keys(categories).map((tab) => (
          <Tab key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
            {tab}
          </Tab>
        ))}
      </Tabs>

      {/* Category Grid */}
      <GridContainer>
        {categories[activeTab].map((category, index) => (
          <Category key={index}>
            <strong>{category.title}</strong> <br />
            {category.type}
          </Category>
        ))}
      </GridContainer>
    </InspirationContainer>
  );
};

export default InspirationSelector;
