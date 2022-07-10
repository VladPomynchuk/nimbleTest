import React from 'react';
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from 'react-icons/ai';
import { StyledChangeBtn } from './ChangeBtn.styled';
import PropTypes from 'prop-types';

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

ChangeBtn.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ChangeBtn;
