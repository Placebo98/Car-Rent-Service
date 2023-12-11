import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: gold;
  padding: 6px;
  outline: auto;
  border: 1px solid;
  border-radius: 15px;
  transition: color 200ms linear, font-size 200ms linear,
    box-shadow 200ms linear;
  &:hover {
    color: red;
    font-size: 25px;
  }
  &:focus {
    color: red;
  }
`;
