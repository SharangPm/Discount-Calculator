// src/components/ResultDisplay.jsx
import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
    margin-top: 1.5rem;
    padding: 1rem;
    font-size: 1.5rem;
    color: #2c3e50;
    border: 1px dashed #2ecc71;
    border-radius: 8px;
    background-color: #eafaf1;
    transition: background-color 0.3s;
    &:hover {
        background-color: #d4f1e2;
    }
`;

const Title = styled.h3`
    color: #2ecc71;
    margin: 0;
`;

const ResultText = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0;
`;

const ResultDisplay = ({ discount }) => (
    <ResultContainer>
        <Title>Discounted Price:</Title>
        <ResultText>{discount ? `₹${discount}` : '-'}</ResultText>
    </ResultContainer>
);

export default ResultDisplay;
