import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.5rem;
    background-color: rgb(255 247 237);
    color: rgb(234 88 12);
    border-radius: 9999px;
    font-weight: 500;
    font-size: 0.875rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: rgb(254 215 170);
    }
`;

const IconWrapper = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;
    background-color: rgb(255 237 213);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    color: rgb(234 88 12);
`;

type CategoryButtonProps = {
    category: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, icon = '', onClick, className }) => {
    return (
        <StyledButton onClick={onClick} className={className}>
            <IconWrapper style={{    backgroundImage: "url(" + `${icon}` + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            ></IconWrapper>
            {category}
        </StyledButton>
    );
};

export default CategoryButton;
