import styled from 'styled-components';

export const ButtonContainer = styled.div`
    width: 200px;
    text-align: center;
    gap: 10px;
    padding: 2px 10px;
    border: 1px solid lightgrey;
    border-radius: 4px;
    text-transform: capitalize;
    cursor: pointer;
    transition-duration: 0.4s;
    :hover {
    background-color: lightblue;
    }
    :not(:last-child) {
    margin-right: 5px;
    }
`;

export const ButtonList = styled.div`
    display: flex;
    gap: 15px;
`;