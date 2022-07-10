import React from 'react';
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from 'react-icons/ai';
import { StyledChangeBtn } from './ChangeBtn.styled';

const ChangeBtn = ({ isActive, onClick }) => {
  return (
    <StyledChangeBtn onClick={onClick}>
      {isActive ? (
        <AiOutlinePauseCircle style={{ width: '25px', height: '25px' }} />
      ) : (
        <AiOutlinePlayCircle style={{ width: '25px', height: '25px' }} />
      )}
    </StyledChangeBtn>
  );
};

export default ChangeBtn;
