import React from 'react';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { StyledRemoveBtn } from './Remove.styled';
import PropTypes from 'prop-types';

const RemoveBtn = ({ onClick }) => {
  return (
    <StyledRemoveBtn onClick={onClick}>
      <AiOutlineMinusCircle
        style={{ width: '25px', height: '25px', color: 'red' }}
      />
    </StyledRemoveBtn>
  );
};

RemoveBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RemoveBtn;
