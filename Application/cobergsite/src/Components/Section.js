// src/Components/Section.js
import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 2rem;
  background: ${props => props.bg || '#fff'};
  color: ${props => props.color || '#000'};
  text-align: center;

  @media (min-width: 768px) {
    padding: 4rem;
    text-align: left;
  }
`;

const Section = ({ id, title, children, bg, color }) => (
  <SectionWrapper id={id} bg={bg} color={color}>
    <h2>{title}</h2>
    {children}
  </SectionWrapper>
);

export default Section;
