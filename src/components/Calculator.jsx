// src/components/Calculator.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import DiscountForm from './DiscountForm';
import ResultDisplay from './ResultDisplay';

const Container = styled.div`
    max-width: 500px;
    margin: auto;
    padding: 2rem;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s;
    &:hover {
        transform: translateY(-10px);
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    color: #34495e;
    margin-bottom: 1rem;
`;

const Calculator = () => {
    const [discount, setDiscount] = useState(0);

    const calculateDiscount = (price, rate) => {
        const discountedAmount = price - (price * (rate / 100));
        setDiscount(discountedAmount.toFixed(2));
    };

    return (
        <Container>
            <Title>Discount Calculator</Title>
            <DiscountForm onCalculate={calculateDiscount} />
            <ResultDisplay discount={discount} />
        </Container>
    );
};

export default Calculator;
