// Category.js
import React from 'react';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Category = ({ icon, label }) => {
  return (
    <CategoryContainer>
      {icon}
      <span>{label}</span>
    </CategoryContainer>
  );
};

export default Category;
