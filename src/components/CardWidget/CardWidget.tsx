import React from 'react';
import styled from 'styled-components';
import { Heart } from 'lucide-react';

type StoreCardProps = {
  storeImageSrc: string;
  storeName: string;
  storeLogoSrc: string;
  discountText?: string;
  onFavoriteClick: () => void;
}

const StoreCardWrapper = styled.div`
    position: relative;
    background-color: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 8rem;
`;

const StoreImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const StoreInfo = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.75rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
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
    color: white;
`;

// const StoreDiscount = styled.p`
//     font-size: 0.75rem;
//     color: rgb(229, 231, 235);
// `;

const FavoriteButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.8);
  transition: background-color 0.2s;

  &:hover {
    background-color: white;
  }
`;

const CardWidget: React.FC<StoreCardProps> = ({
                                                storeImageSrc,
                                                storeName,
                                                storeLogoSrc,
                                                onFavoriteClick,
                                              }) => {
  return (
    <StoreCardWrapper>
      <ImageContainer>
        <StoreImage src={storeImageSrc} alt={storeName} />

        <StoreInfo>
          <StoreBrand>
            <StoreLogo src={storeLogoSrc} alt={storeName} />
            <StoreName>{storeName}</StoreName>
          </StoreBrand>
          {/*<StoreDiscount>{discountText}</StoreDiscount>*/}
        </StoreInfo>

        <FavoriteButton onClick={onFavoriteClick}>
          <Heart size={16} color="#374151" />
        </FavoriteButton>
      </ImageContainer>
    </StoreCardWrapper>
  );
};

export default CardWidget;