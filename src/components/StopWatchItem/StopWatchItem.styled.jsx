import styled from 'styled-components';

export const Item = styled.li`
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid rgb(69, 61, 61, 0.3);

  display: flex;
  font-weight: 500;
  align-items: center;
  color: ${props => (props.isActive ? 'green' : 'black')};

  &:last-child {
    border-bottom: 1px solid rgb(69, 61, 61, 0.3);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled.p`
  display: flex;
  margin-right: auto;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
`;

export const Value = styled.p`
  font-weight: 700;
  margin-right: 20px;
  margin-left: 10px;
`;
