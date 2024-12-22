import React from 'react';
import styled from 'styled-components';

type DotsProps = {
  total: number;
  current: number;
  onDotClick?: (index: number) => void;
}

type DotButtonProps = {
  isActive: boolean;
}

const DotsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;
`;

const DotButton = styled.button<DotButtonProps>`
    width: 8px;
    height: 8px;
    border-radius: 10PX;
    transition: all 0.3s ease;
    background-color: ${props => props.isActive ? '#FB923C' : '#D1D5DB'};
    border: none;
    padding: 0;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.isActive ? '#FB923C' : '#9CA3AF'};
    }
`;

const DotWidget: React.FC<DotsProps> = ({ total, current, onDotClick }) => (
  <DotsContainer>
    {Array.from({ length: total }).map((_, index) => (
      <DotButton
        key={index}
        isActive={index === current}
        onClick={() => onDotClick?.(index)}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </DotsContainer>
);

export default DotWidget;

