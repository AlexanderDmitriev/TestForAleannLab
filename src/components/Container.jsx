import styled from 'styled-components';
import {theme} from './theme';

export const Container = styled.div`
  padding: 9px;
  box-sizing: content-box;
  margin: 0 auto;
  width: 396px;

  @media screen and (min-width: 968px) {
    width: 768px;
    padding-top: 29px;
  }
  @media screen and (min-width: 1920px) {
    width: 1400px;
  }
`;

export const Wrapper = styled.div`
  background-color: ${theme.colors.cardBackground};
  height: 100%;
`;
