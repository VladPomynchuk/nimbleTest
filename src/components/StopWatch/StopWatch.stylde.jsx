import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 40px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 560px) {
    width: 560px;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;
