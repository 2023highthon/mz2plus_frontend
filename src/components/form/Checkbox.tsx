import React from "react";
import styled from "@emotion/styled";

interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label: string;
}

const Checkbox = (props: CheckboxProps) => {
    return (
        <CheckboxContainer>
            <CheckboxInput
                type="checkbox"
                checked={props.checked}
                onChange={(e) => props.onChange(e.target.checked)}
            />
            <CheckboxLabel>{props.label}</CheckboxLabel>
        </CheckboxContainer>
    );
};

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;

const CheckboxInput = styled.input`
    margin: 0;
    appearance: none;
    background-color: #f4f6f8;
    border-radius: 12px;
    width: 33px;
    height: 33px;
    cursor: pointer;
    background-image: url("images/unchecked.svg");
    background-size: 50% 50%;
    background-position: 50%;
    background-repeat: no-repeat;
    transition: all 0.2s ease-in-out;
    &:checked {
        border: none;
        background-image: url("images/checked.svg");
        background-size: 50% 50%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: #4329ff;
    }
`;

const CheckboxLabel = styled.label`
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #6d7784;
    margin-left: 16px;
`;

export default Checkbox;
