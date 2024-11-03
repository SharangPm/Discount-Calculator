// src/components/DiscountForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1rem;
`;

const Label = styled.label`
    font-weight: bold;
    color: #2c3e50;
`;

const Input = styled.input`
    padding: 0.8rem;
    border: 1px solid #bdc3c7;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
    &:focus {
        border-color: #2980b9;
        box-shadow: 0 0 8px rgba(41, 128, 185, 0.5);
    }
`;

const Select = styled.select`
    padding: 0.8rem;
    border: 1px solid #bdc3c7;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
`;

const Button = styled.button`
    padding: 0.8rem;
    font-size: 1.1rem;
    font-weight: bold;
    background: linear-gradient(45deg, #6a89cc, #b8e994);
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s;
    &:hover {
        background: linear-gradient(45deg, #3c6382, #78e08f);
        transform: scale(1.05);
    }
`;

const DiscountForm = ({ onCalculate }) => {
    const [price, setPrice] = useState('');
    const [rate, setRate] = useState('');
    const [isCustom, setIsCustom] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(parseFloat(price), parseFloat(rate));
    };

    const handleRateChange = (e) => {
        const value = e.target.value;
        if (value === 'custom') {
            setIsCustom(true);
            setRate(''); // Reset rate for manual entry
        } else {
            setIsCustom(false);
            setRate(value); // Set selected rate
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>Original Price:</Label>
            <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
                required
            />
            <Label>Discount Rate (%):</Label>
            <Select value={isCustom ? 'custom' : rate} onChange={handleRateChange}>
                <option value="">Select a discount rate</option>
                <option value="5">5%</option>
                <option value="10">10%</option>
                <option value="15">15%</option>
                <option value="20">20%</option>
                <option value="25">25%</option>
                <option value="custom">Custom</option>
            </Select>
            {isCustom && (
                <Input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="Enter custom rate"
                    required
                />
            )}
            <Button type="submit">Calculate</Button>
        </Form>
    );
};

export default DiscountForm;
