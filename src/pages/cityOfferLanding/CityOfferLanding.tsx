import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';

const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
};

const PageContainer = styled.div`
  width: 100%;
  max-width: 28rem;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  background-color: #f9fafb;

  @media (min-width: ${BREAKPOINTS.md}) {
    max-width: 32rem;
  }
`;

const Header = styled.header`
  background-color: rgba(255, 237, 213, 0.8);
  padding: 0.75rem 1rem;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  max-width: 28rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 32rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackIcon = styled(ChevronRight)`
  width: 1.25rem;
  height: 1.25rem;
  color: #f97316;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const UserTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const UserName = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

const WelcomeText = styled.span`
  font-size: 0.75rem;
  color: #9ca3af;
`;

const Avatar = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: #e5e7eb;
  border: 2px solid white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const MainContent = styled.main`
  padding-top: 4rem;
  padding: 4rem 1rem 1rem 1rem;

  @media (min-width: ${BREAKPOINTS.md}) {
    padding: 5rem 1.5rem 1.5rem 1.5rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;

  @media (min-width: ${BREAKPOINTS.md}) {
    margin-bottom: 2.5rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: left; /* Aligns text to the left */
    text-align: left;

  @media (min-width: ${BREAKPOINTS.md}) {
    font-size: 1.25rem;
  }
`;

const ViewAllButton = styled.button`
  color: #f97316;
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    color: #ea580c;
  }
`;

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

const OfferCard = styled.div`
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const OfferImageContainer = styled.div`
  position: relative;
  height: 12rem;

  @media (min-width: ${BREAKPOINTS.sm}) {
    height: 14rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const OfferOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const OfferTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const OfferTitle = styled.h3`
  color: white;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const OfferStats = styled.div`
  display: flex;
  gap: 0.5rem;
  color: white;
  font-size: 0.875rem;
`;

const SeeMoreButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`;

// Special Offers Components
const SpecialOffersCard = styled.div`
  background: #fff7ed;
  border-radius: 0.5rem;
  padding: 1rem;

  @media (min-width: ${BREAKPOINTS.md}) {
    padding: 1.5rem;
  }
`;

const SpecialOffersContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const OfferInfo = styled.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #f97316;
    margin-bottom: 0.25rem;

    @media (min-width: ${BREAKPOINTS.md}) {
      font-size: 1.25rem;
    }
  }

  p {
    font-size: 0.875rem;
    color: #4b5563;
  }
`;

const DecorationContainer = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
`;

const Decoration = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 5rem;
  height: 5rem;
  background: #fed7aa;
  border-radius: 0.5rem;
  transform: rotate(12deg);
`;

const AddCardButton = styled.button`
  background: #f97316;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #ea580c;
  }
`;

const CityOffersLanding = () => {
  const cities = [
    { name: 'Hokkaido', image: 'https://ctlstg-cdn.pulseid.com/rklo1tAW0X/604f52b7-c998-4579-8812-5167c2a64109.png' },
    { name: 'Tokyo', image: 'https://ctlstg-cdn.pulseid.com/rklo1tAW0X/604f52b7-c998-4579-8812-5167c2a64109.png' },
    { name: 'Osaka', image: 'https://ctlstg-cdn.pulseid.com/rklo1tAW0X/604f52b7-c998-4579-8812-5167c2a64109.png' },
    { name: 'Kyoto', image: 'https://ctlstg-cdn.pulseid.com/rklo1tAW0X/604f52b7-c998-4579-8812-5167c2a64109.png' },
    { name: 'Kyoto1', image: 'https://ctlstg-cdn.pulseid.com/rklo1tAW0X/604f52b7-c998-4579-8812-5167c2a64109.png' },
    { name: 'Kyoto2', image: 'https://ctlstg-cdn.pulseid.com/rklo1tAW0X/604f52b7-c998-4579-8812-5167c2a64109.png' },
    { name: 'Kyoto3', image: 'https://ctlstg-cdn.pulseid.com/rklo1tAW0X/604f52b7-c998-4579-8812-5167c2a64109.png' },
    { name: 'Kyoto4', image: 'https://ctlstg-cdn.pulseid.com/rklo1tAW0X/604f52b7-c998-4579-8812-5167c2a64109.png' },
  ];

  const trendingOffers = [
    {
      id: 1,
      title: 'Parfaiteria bel',
      rating: 5.6,
      reviews: 120,
      image: 'https://ctlstg-cdn.pulseid.com/JER2s24FGy/5d492b58-ff69-4cdb-a362-22ba67000ac4.jpg'
    }
  ];

  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <BackIcon />
          <UserInfo>
            <UserTextContainer>
              <UserName>Hi, John Doe</UserName>
              <WelcomeText>Welcome</WelcomeText>
            </UserTextContainer>
            <Avatar />
          </UserInfo>
        </HeaderContent>
      </Header>

      <MainContent>
        <Section>
          <SectionHeader>
            <SectionTitle>Discover your city!</SectionTitle>
            <ViewAllButton>View All</ViewAllButton>
          </SectionHeader>

          <CitiesContainer>
            {cities.map((city) => (
              <CityItem key={city.name}>
                <CityImage>
                  <img src={city.image} alt={city.name} loading="lazy" />
                </CityImage>
                <CityName>{city.name}</CityName>
              </CityItem>
            ))}
          </CitiesContainer>
        </Section>

        <Section>
          <SectionTitle>Trending Offer</SectionTitle>
          {trendingOffers.map((offer) => (
            <OfferCard key={offer.id}>
              <OfferImageContainer>
                <img src={offer.image} alt={offer.title} loading="lazy" />
                <OfferOverlay>
                  <OfferTag>Food</OfferTag>
                  <OfferTitle>{offer.title}</OfferTitle>
                  <OfferStats>
                    <span>★ {offer.rating}</span>
                    <span>•</span>
                    <span>{offer.reviews} reviews</span>
                  </OfferStats>
                </OfferOverlay>
                <SeeMoreButton>See more</SeeMoreButton>
              </OfferImageContainer>
            </OfferCard>
          ))}
        </Section>
        <SectionTitle>Add card to special offer!</SectionTitle>
        <SpecialOffersCard>
          <SpecialOffersContent>
            <OfferInfo>
              <h3>Get Special Offers</h3>
              <p>Many offers waiting for you, get it now</p>
            </OfferInfo>
            <DecorationContainer>
              <Decoration />
            </DecorationContainer>
            <AddCardButton>Add a card</AddCardButton>
          </SpecialOffersContent>
        </SpecialOffersCard>
      </MainContent>
    </PageContainer>
  );
};

export default CityOffersLanding;