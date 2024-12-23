import { useRef, useState, TouchEvent, useEffect } from 'react';
import { Heart, ChevronLeft } from 'lucide-react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';

interface ImageSlideProps {
  $active?: boolean;
  $sliding?: boolean;
  $offset?: number;
}

interface ImageItem {
  id: number;
  name: string;
  images: string;
}

interface NavigationButtonProps {
  $position: 'left' | 'right';
}

interface Image {
  id: number;
  src: string;
  alt: string;
}

const NavigationHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 20;
    background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
    height: 56px;
`;

const CircleButton = styled.button`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.95);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);

    &:active {
        background: rgba(255, 255, 255, 0.85);
    }

    svg {
        width: 20px;
        height: 20px;
        color: #1a1a1a;
    }
`;

const TimerControl = styled(CircleButton)`
    position: absolute;
    bottom: 7rem;
    right: 1rem;
    z-index: 20;
    background: rgba(0, 0, 0, 0.6);

    svg {
        color: white;
    }

    &:hover {
        background: rgba(0, 0, 0, 0.8);
    }

    @media (min-width: 768px) {
        bottom: 1rem;
    }
`;

const PageTitle = styled.h1`
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    position: absolute;
    top: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
`;

const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 100vw;
    margin: 0 auto;
    height: 100vh;

    @media (min-width: 768px) {
        max-width: 32rem;
        height: auto;
    }
`;

const MainImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #000;
    touch-action: pan-y pinch-zoom;

    @media (min-width: 768px) {
        height: 24rem;
    }
`;

const ImageSlide = styled.div<ImageSlideProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform ${(props) => (props.$sliding ? '0ms' : '300ms')} ease-in-out;
    transform: translateX(${(props) => props.$offset}px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media (max-width: 767px) {
        max-height: 100vh;
        object-position: center;
    }

    @media (min-width: 768px) {
        object-fit: cover;
    }
`;

const DotsContainer = styled.div`
    position: fixed;
    bottom: 6rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    z-index: 10;

    @media (min-width: 768px) {
        position: absolute;
    }
`;

const Dot = styled.button<ImageSlideProps>`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    transition: background-color 200ms;
    background-color: ${props => (props.$active ? 'white' : 'rgb(156 163 175)')};
    border: none;
    padding: 0;
    cursor: pointer;
`;

const ThumbnailContainer = styled.div`
    position: fixed;
    bottom: 10rem;
    left: 0;
    right: 0;
    padding: 0 1rem;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);

    @media (min-width: 768px) {
        position: absolute;
        background: none;
    }
`;

const ThumbnailScroll = styled.div`
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding: 0.5rem 0;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const ThumbnailButton = styled.button<ImageSlideProps>`
    flex-shrink: 0;
    position: relative;
    border: none;
    padding: 0;
    cursor: pointer;
    ${props => props.$active && `outline: 2px solid white; outline-offset: 2px;`}
`;

const ThumbnailImage = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    object-fit: cover;
    border-radius: 0.5rem;

    @media (min-width: 768px) {
        width: 4rem;
        height: 4rem;
    }
`;

const MoreItemsOverlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MoreItemsText = styled.span`
    color: white;
    font-size: 0.875rem;
`;

const DiscountBanner = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 1rem;
    backdrop-filter: blur(4px);

    @media (min-width: 768px) {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: none;
    }
`;

const BannerContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: 32rem;
    margin: 0 auto;
`;

const Logo = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    background-color: rgb(229 231 235);
    flex-shrink: 0;
`;

const BannerText = styled.div`
    flex: 1;
`;

const StoreName = styled.p`
    font-weight: 500;
    margin: 0;
`;

const DiscountText = styled.p`
    font-size: 0.875rem;
    margin: 0.25rem 0 0;
`;

const NavigationButton = styled.button<NavigationButtonProps>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    backdrop-filter: blur(4px);

    &:hover {
        background: rgba(0, 0, 0, 0.7);
    }

    ${(props) => (props.$position === 'left' ? 'left: 1rem;' : 'right: 1rem;')}

    @media (max-width: 767px) {
        display: none;
    }
`;

const CityOfferDetailLanding = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const items = useSelector((state: any) => state.images.items);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  const SLIDE_INTERVAL = 3000; // 3 seconds per slide
  const minSwipeDistance = 50;

  useEffect(() => {
    const itemIndex = items.findIndex((item: { id: number; }) => item.id === Number(id));
    handleImageClick(itemIndex);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const startTimer = () => {
      intervalId = setInterval(() => {
        if (!isPaused && !isDragging) {
          setCurrentIndex(current =>
            current < items.length - 1 ? current + 1 : 0
          );
        }
      }, SLIDE_INTERVAL);
    };

    startTimer();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPaused, isDragging, items.length]);

  useEffect(() => {
    if (isDragging) {
      setIsPaused(true);
    }
  }, [isDragging]);

  const toggleTimer = () => {
    setIsPaused(!isPaused);
  };

  const handleImageClick = (index: number) => {
    if (!isDragging) {
      setCurrentIndex(index);
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    const containerWidth = containerRef.current?.offsetWidth || 0;
    const boundedDiff = Math.max(Math.min(diff, containerWidth), -containerWidth);
    setDragOffset(-boundedDiff);
    setTouchEnd(currentTouch);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < items.length - 1) {
      setCurrentIndex(current => current + 1);
    } else if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(current => current - 1);
    }

    setTouchStart(null);
    setTouchEnd(null);
    setIsDragging(false);
    setDragOffset(0);
  };

  const handlePrevious = () => {
    setCurrentIndex(current => (current > 0 ? current - 1 : items.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex(current => (current < items.length - 1 ? current + 1 : 0));
  };

  const handleBack = () => {
    navigate(`/`);
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const getImageOffset = (index: number): string => {
    const baseOffset = (index - currentIndex) * 100;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const percentageDragOffset = (dragOffset / containerWidth) * 100;
    return `${baseOffset + percentageDragOffset}%`;
  };

  return (
    <CarouselContainer>
      <NavigationHeader>
        <CircleButton onClick={handleBack} aria-label="Go back">
          <ChevronLeft size={24} />
        </CircleButton>
        <CircleButton
          onClick={handleFavorite}
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart fill={isFavorited ? '#000' : 'none'} />
        </CircleButton>
      </NavigationHeader>

      <PageTitle>Dessert</PageTitle>

      <MainImageContainer
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((image: ImageItem, index: number) => (
          <ImageSlide
            key={image.id}
            $sliding={isDragging}
            $offset={parseFloat(getImageOffset(index))}
            style={{ transform: `translateX(${getImageOffset(index)})` }}
          >
            <Image src={image.images} alt={image.name} draggable="false" />
          </ImageSlide>
        ))}
      </MainImageContainer>

      <TimerControl
        onClick={toggleTimer}
        aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
      >
      </TimerControl>

      <NavigationButton onClick={handlePrevious} $position="left" aria-label="Previous image">
        ←
      </NavigationButton>
      <NavigationButton onClick={handleNext} $position="right" aria-label="Next image">
        →
      </NavigationButton>

      <DotsContainer>
        {items.map((_: ImageItem, index: number) => (
          <Dot
            key={index}
            $active={currentIndex === index}
            onClick={() => handleImageClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </DotsContainer>

      <ThumbnailContainer>
        <ThumbnailScroll>
          {items.map((image: ImageItem, index: number) => (
            <ThumbnailButton
              key={image.id}
              onClick={() => handleImageClick(index)}
              $active={currentIndex === index}
            >
              <ThumbnailImage src={image.images} alt={image.name} />
              {index === items.length - 1 && (
                <MoreItemsOverlay>
                  <MoreItemsText>+{items.length}</MoreItemsText>
                </MoreItemsOverlay>
              )}
            </ThumbnailButton>
          ))}
        </ThumbnailScroll>
      </ThumbnailContainer>

      <DiscountBanner>
        <BannerContent>
          <Logo />
          <BannerText>
            <StoreName>Parfaiteria Bel</StoreName>
            <DiscountText>
              Enjoy an instant 10% discount on purchases of ¥8,000 with your card
            </DiscountText>
          </BannerText>
        </BannerContent>
      </DiscountBanner>
    </CarouselContainer>
  );
};

export default CityOfferDetailLanding;