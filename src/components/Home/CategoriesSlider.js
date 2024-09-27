// CategoriesSlider.js
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Category from './Category';

// Styled Components
const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
`;

const CategoriesWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => `translateX(${props.translateX}px)`};
  white-space: nowrap;
  max-width: 100%;
  box-sizing: border-box;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 2;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${(props) => (props.left ? `left: 10px;` : `right: 10px;`)}
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  min-width: 100px;
  cursor: pointer;
`;

// Main Component
const CategoriesSlider = () => {
  const categories = [
    { label: 'Swimming pools', icon: '🏊‍♂️' },
    { label: 'Ryokans', icon: '🏯' },
    { label: 'Luxe', icon: '🍽️' },
    { label: 'Mansions', icon: '🏰' },
    { label: 'Farms', icon: '🚜' },
    { label: 'Castles', icon: '🏰' },
    { label: 'Tiny homes', icon: '🏠' },
    { label: 'Top cities', icon: '🏙️' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const totalWidth = sliderRef.current.scrollWidth;
      const visibleWidth = sliderRef.current.clientWidth;
      setSliderWidth(visibleWidth);
      setMaxScroll(-(totalWidth - visibleWidth));
    }
  }, []);

  const handleScroll = (direction) => {
    const scrollAmount = sliderWidth * 0.5; // Scroll by 50% of visible area
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + scrollAmount, 0));
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - scrollAmount, maxScroll));
    }
  };

  return (
    <SliderContainer>
      <ArrowButton left onClick={() => handleScroll('left')} disabled={currentIndex === 0}>
        <FaChevronLeft />
      </ArrowButton>

      <CategoriesWrapper translateX={currentIndex} ref={sliderRef}>
        {categories.map((category, index) => (
          <CategoryItem key={index}>
            {category.icon}
            <span>{category.label}</span>
          </CategoryItem>
        ))}
      </CategoriesWrapper>

      <ArrowButton onClick={() => handleScroll('right')} disabled={currentIndex <= maxScroll}>
        <FaChevronRight />
      </ArrowButton>
    </SliderContainer>
  );
};

export default CategoriesSlider;
