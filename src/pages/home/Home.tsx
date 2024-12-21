import { Heart } from 'lucide-react';
import styled from 'styled-components';
import CategoryButton from "../../components/categoryButton/CategoryButton.tsx";
import BackButtonComponent from "../../components/BackButton/BackButton.tsx";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f9fafb;
    max-width: 100%;
`;

const Header = styled.header`
    position: relative;
    width: 100%;
    height: 12rem;
`;

const HeaderImage = styled.div`
    position: absolute;
    inset: 0;
    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.3);
    }
`;

const HeaderImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const HeaderContent = styled.div`
    position: relative;
    padding: 1rem;
`;

const HeaderTitle = styled.h1`
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: -1.5rem;
`;

const MainContent = styled.div`
    padding: 1.5rem 1rem;
`;

const SectionTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const OfferCard = styled.div`
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const OfferContent = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const OfferInfo = styled.div`
    flex: 1;
`;

const BrandWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    align-items: center;
`;

const BrandImage = styled.img`
    width: 2rem;
    height: 2rem;
`;

const BrandName = styled.span`
    font-size: 0.875rem;
`;

const OfferTitle = styled.h3`
    font-weight: 600;
    margin-bottom: 0.25rem;
`;

const DiscountText = styled.p`
    color: #f97316;
    font-weight: 500;
`;

const ViewMoreButton = styled.button`
    margin-top: 0.75rem;
    padding: 0.5rem 1rem;
    background-color: #fb923c;
    color: white;
    border-radius: 9999px;
    font-size: 0.875rem;
`;

const CategorySection = styled.div`
    margin-top: 2rem;
`;

const CategoryList = styled.div`
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const StoreGrid = styled.div`
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

const StoreCard = styled.div`
    position: relative;
    background-color: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const StoreImage = styled.img`
    width: 100%;
    height: 8rem;
    object-fit: cover;
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const StoreInfo = styled.div`
  padding: 0.75rem;
`;

const StoreBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
`;

const StoreLogo = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
`;

const StoreName = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
`;

const StoreDiscount = styled.p`
  font-size: 0.75rem;
  color: #4b5563;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  padding: 0.25rem 0.5rem;
  background-color: #ffedd5;
  color: #ea580c;
  border-radius: 9999px;
  font-size: 0.75rem;
`;

const Home = () => {
    const handleButtonClick = (category: string) => {
        alert(`${category} button clicked!`);
    };

    const categories = [
        { name: 'Beauty', icon: '💄' },
        { name: 'Fitness', icon: '💪' },
        { name: 'Travel', icon: '✈️' },
        { name: 'Travel', icon: '✈️' },
    ];

    return (
        <Container>
            <Header>
                <HeaderImage>
                    <HeaderImg src="https://jonellepatrick.com/wp-content/uploads/2013/10/5-kabukicho.jpg" alt="Tokyo cityscape" />
                </HeaderImage>
                <HeaderContent>
                    <BackButtonComponent onClick={() => console.log('Back button clicked')} />
                    <HeaderTitle>Tokyo</HeaderTitle>
                </HeaderContent>
            </Header>

            <MainContent>
                <SectionTitle>Special Offers!</SectionTitle>
                <OfferCard>
                    <OfferContent>
                        <OfferInfo>
                            <BrandWrapper>
                                <BrandImage src="/api/placeholder/30/30" alt="SK-II" />
                                <BrandName>SK-II</BrandName>
                            </BrandWrapper>
                            <OfferTitle>Get Special Offer</OfferTitle>
                            <DiscountText>Up to 9% discount</DiscountText>
                            <ViewMoreButton>View More</ViewMoreButton>
                        </OfferInfo>
                        <BrandImage
                            src="/api/placeholder/100/100"
                            alt="Beauty product"
                            style={{ width: '6rem', height: '6rem', borderRadius: '50%' }}
                        />
                    </OfferContent>
                </OfferCard>

                <CategorySection>
                    <SectionTitle>Explore Tokyo's Best Category</SectionTitle>
                    <CategoryList>
                        {categories.map((cat) => (
                            <CategoryButton
                                key={cat.name}
                                category={cat.name}
                                icon={cat.icon}
                                onClick={() => handleButtonClick(cat.name)}
                            />
                        ))}
                    </CategoryList>
                </CategorySection>

                <StoreGrid>
                    {[
                        { name: 'Parfaiteria Bel', category: 'Dessert' },
                        { name: 'Muji', category: 'Retail' },
                        { name: 'Shiseido', category: 'Beauty' },
                        { name: 'Kosé', category: 'Beauty' }
                    ].map((store) => (
                        <div>
                        <StoreCard key={store.name}>
                            <StoreImage src="/api/placeholder/200/200" alt={store.name} />
                            <FavoriteButton>
                                <Heart size={16} />
                            </FavoriteButton>
                            <StoreInfo>
                                <StoreBrand>
                                    <StoreLogo src="/api/placeholder/20/20" alt={store.name} />
                                    <StoreName>{store.name}</StoreName>
                                </StoreBrand>
                                <StoreDiscount>Get instant discounts with card</StoreDiscount>
                            </StoreInfo>
                        </StoreCard>
                            <TagContainer>
                                <Tag>{store.category}</Tag>
                                <Tag>Exclusive</Tag>
                            </TagContainer>
                        </div>
                    ))}
                </StoreGrid>
            </MainContent>
        </Container>
    );
};

export default Home;