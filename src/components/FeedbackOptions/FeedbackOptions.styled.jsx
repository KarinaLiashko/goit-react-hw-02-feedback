import styled from '@emotion/styled';

export const ButtonList = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  background-color: #3498db;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #2980b9;
  }
`;