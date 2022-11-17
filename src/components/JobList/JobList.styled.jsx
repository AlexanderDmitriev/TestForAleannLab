import styled from 'styled-components';
import {theme} from '../theme';

export const JobListSection = styled.ul`
  list-style: none;
  background-color: ${theme.colors.cardBackground};
  & li:not(:last-child) {
    margin-bottom: 8px;
  }
`;
