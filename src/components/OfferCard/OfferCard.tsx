import styled from 'styled-components';
import React, { useState } from 'react';

const CardContainer = styled.div`
  position: relative;
  border-radius: 0.75rem;
  width: 18rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const CarouselWrapper = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
`;

const CarouselTrack = styled.div<{ $offset: number }>`
  display: flex;
  height: 100%;
  transition: transform 300ms ease-out;
  transform: translateX(${props => props.$offset}%);
`;

const CarouselSlide = styled.div<{ $active: boolean }>`
  min-width: 85%;
  padding: 0 0.5rem;
  transition: all 300ms ease;
  opacity: ${props => props.$active ? 1 : 0.5};
  transform: scale(${props => props.$active ? 1 : 0.9});
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const LocationTag = styled.div`
  position: absolute;
  top: 1rem;
  left: 3.5rem;
  z-index: 10;
  span {
    font-size: 0.875rem;
    color: white;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: white;
  font-size: 1.25rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const ContentContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  z-index: 10;
`;

const Title = styled.h3`
  color: white;
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const SeeMoreButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: rgba(146, 64, 14, 0.8);
  color: white;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: rgba(146, 64, 14, 0.9);
  }
`;

const ProgressDots = styled.div`
  position: absolute;
  bottom: 6rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.375rem;
  z-index: 10;
`;

const Dot = styled.div<{ $active: boolean }>`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background-color: ${props => props.$active ? '#f97316' : 'rgba(255, 255, 255, 0.6)'};
  transition: background-color 300ms;
`;

interface OfferCardProps {
  images?: string[];
  title?: string;
  location?: string;
  rating?: number;
  reviews?: number;
  onClose?: () => void;
  onSeeMore?: () => void;
  onIndexChange?: (index: number) => void;
}

const OfferCard: React.FC<OfferCardProps> = ({
                                               images = ["/api/placeholder/400/300", "/api/placeholder/400/300", "/api/placeholder/400/300"],
                                               title = "Parfaiteria bel",
                                               location = "Tokyo",
                                               rating = 5.0,
                                               reviews = 120,
                                               onClose,
                                               onSeeMore,
                                               onIndexChange
                                             }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const calculateOffset = () => {
    const slideWidth = 85;
    const padding = 7.5;
    return -(currentIndex * slideWidth) + padding;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      setCurrentIndex(prev => {
        const newIndex = prev + 1;
        onIndexChange?.(newIndex);
        return newIndex;
      });
    }

    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => {
        const newIndex = prev - 1;
        onIndexChange?.(newIndex);
        return newIndex;
      });
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <>
    <CardContainer>
      <CarouselWrapper
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <CarouselTrack $offset={calculateOffset()}>
          {images.map((img, index) => (
            <CarouselSlide key={index} $active={index === currentIndex}>
              <CardImage src={img} alt={`Slide ${index + 1}`} />
            </CarouselSlide>
          ))}
        </CarouselTrack>
      </CarouselWrapper>

      <LocationTag>
        <span>{location}</span>
      </LocationTag>

      <CloseButton onClick={onClose}>&times;</CloseButton>

      <ContentContainer>
        <Title>{title}</Title>
        <RatingContainer>
          <div>★ {rating}</div>
          <span>•</span>
          <span>{reviews} reviews</span>
        </RatingContainer>
        <SeeMoreButton onClick={onSeeMore}>See more</SeeMoreButton>
      </ContentContainer>
    </CardContainer>
    </>
  );
};

export default OfferCard;