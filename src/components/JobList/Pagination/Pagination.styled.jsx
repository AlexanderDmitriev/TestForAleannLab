import styled from 'styled-components';

export const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
`;

export const PaginationListItem = styled.li`
  padding: 8px 12px;
`;

export const PageNumber = styled.button`
  text-decoration: none;
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 700;
  font-size: 20.8px;
  line-height: 25px;
  align-items: center;
  letter-spacing: 1.73333px;
  /* Grey/07 */
  color: #70778b;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition-property: color;
  transition-duration: 300ms;
  transition-timing-function: linear;
  &:hover,
  &:focus {
    color: red;
  }
`;
