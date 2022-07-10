import React from 'react';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { StyledRemoveBtn } from './Remove.styled';

const RemoveBtn = ({ onClick }) => {
  return (
    <StyledRemoveBtn onClick={onClick}>
      <AiOutlineMinusCircle
        style={{ width: '25px', height: '25px', color: 'red' }}
      />
    </StyledRemoveBtn>
  );
};

export default RemoveBtn;
