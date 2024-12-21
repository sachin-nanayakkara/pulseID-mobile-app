import React from "react";
import styled from "styled-components";
import {Heart} from "lucide-react";

// Define the type for StoreCard props
type Store = {
    name: string;
    category: string;
    image: string;
    logo: string;
    discountText: string;
};

type StoreCardProps = {
    store: Store;
    onFavoriteClick?: (storeName: string) => void;
};

// Styled Components
const Card = styled.div`
    position: relative;
    background-color: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const Image = styled.img`
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

const Info = styled.div`
    padding: 0.75rem;
`;

const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
`;

const Logo = styled.img`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;
`;

const Name = styled.h3`
    font-size: 0.875rem;
    font-weight: 500;
`;

const Discount = styled.p`
    font-size: 0.75rem;
    color: #4b5563;
`;

const TagContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
`;

const Tag = styled.div`
    background-color: #f3f4f6;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
`;

const CardWidget: React.FC<StoreCardProps> = ({ store, onFavoriteClick }) => {
    return (
        <Card>
            <Image src={store.image} alt={store.name} />
            <FavoriteButton onClick={() => onFavoriteClick?.(store.name)}>
                <Heart size={16} />
            </FavoriteButton>
            <Info>
                <Brand>
                    <Logo src={store.logo} alt={store.name} />
                    <Name>{store.name}</Name>
                </Brand>
                <Discount>{store.discountText}</Discount>
            </Info>
            <TagContainer>
                <Tag>{store.category}</Tag>
                <Tag>Exclusive</Tag>
            </TagContainer>
        </Card>
    );
};
export default CardWidget;
