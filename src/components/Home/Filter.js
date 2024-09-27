// Filter.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSlidersH } from 'react-icons/fa'; // For filter icon
import CategoriesSlider from './CategoriesSlider'; // Import your category slider component

// Styled Components
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  margin:10px;
  background-color: white;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;  /* Stack on small screens */
    align-items: flex-start;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const ToggleLabel = styled.span`
  font-size: 14px;
  margin-right: 10px;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: #ff385c;
  }

  &:checked + .slider:before {
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

// Modal for filter options (simplified)
const ModalContainer = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  height: 300px;
`;

// Main Filter Component
const Filter = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [taxesIncluded, setTaxesIncluded] = useState(false);

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleToggleTaxes = () => {
    setTaxesIncluded(!taxesIncluded);
  };

  return (
    <FilterContainer>
      {/* Category Slider */}
      <SliderContainer>
        <CategoriesSlider />
      </SliderContainer>

      {/* Filter Button */}
      <FilterButton onClick={handleToggleModal}>
        <FaSlidersH style={{ marginRight: '8px' }} /> Filters
      </FilterButton>

      {/* Tax Toggle */}
      <ToggleContainer>
        <ToggleLabel>Display total before taxes</ToggleLabel>
        <ToggleSwitch>
          <ToggleInput 
            type="checkbox" 
            checked={taxesIncluded} 
            onChange={handleToggleTaxes} 
          />
          <Slider className="slider" />
        </ToggleSwitch>
      </ToggleContainer>

      {/* Modal */}
      <ModalContainer isOpen={modalOpen} onClick={handleToggleModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <h3>Filter Options</h3>
          {/* Add filter options inside the modal */}
          <button onClick={handleToggleModal}>Close</button>
        </ModalContent>
      </ModalContainer>
    </FilterContainer>
  );
};

export default Filter;
