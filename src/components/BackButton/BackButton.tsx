import React from 'react';
import styled from 'styled-components';
import { ChevronLeft } from 'lucide-react'; // You can import any icon library you're using

// Define the styled button component
const BackButton = styled.button`
    padding: 0.5rem;
    border-radius: 9999px;
    background-color: rgba(255, 255, 255, 0.8);
    margin-right: 100%;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 1);
    }
`;

interface BackButtonProps {
    onClick?: () => void;
}

const BackButtonComponent: React.FC<BackButtonProps> = ({ onClick }) => {
    return (
        <BackButton onClick={onClick}>
            <ChevronLeft size={24} />
        </BackButton>
    );
};

export default BackButtonComponent;