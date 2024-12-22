import React from 'react';
import styled from 'styled-components';

interface City {
  name: string;
  image: string;
}

interface CitiesProps {
  cities: City[];
}

const CitiesContainer = styled.div`
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const CityItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
`;

const CityImage = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 9999px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const CityName = styled.span`
    font-size: 0.875rem;
    color: #4b5563;
`;

const StoryView: React.FC<CitiesProps> = ({ cities }) => {
  const handleCityClick = (index: number) => {
    const container = document.getElementById('cities-container');
    if (container) {
      const cityElement = container.children[index] as HTMLElement;
      container.scrollTo({
        left: cityElement.offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <CitiesContainer id="cities-container">
      {cities.map((city, index) => (
        <CityItem key={city.name} onClick={() => handleCityClick(index)}>
          <CityImage>
            <img src={city.image} alt={city.name} />
          </CityImage>
          <CityName>{city.name}</CityName>
        </CityItem>
      ))}
    </CitiesContainer>
  );
};

export default StoryView;