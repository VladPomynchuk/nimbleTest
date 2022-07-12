import { useState, useEffect } from 'react';
import { Item, Wrapper, StyledTitle, Value } from './StopWatchItem.styled';
import normalizeTime from 'helpers/normalizeTime';
import useStorage from 'hooks/useStorage';
import { useDispatch } from 'react-redux';
import { removeItem } from 'redux/stopWatchSlice';
import ChangeBtn from 'components/ChangeBtn';
import RemoveBtn from 'components/RemoveBtn';
import PropTypes from 'prop-types';

const StopWatchItem = ({ item }) => {
  const { isActive, value, setValue, setIsActive, deleteItem } =
    useStorage(item);
  const [intervalId, setIntervalId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isActive) {
      setIntervalId(
        setInterval(() => {
          console.log('interval');
          setValue(state => state + 1000);
        }, 1000)
      );
    }
  }, [isActive, setValue]);

  const handleClickStart = () => {
    if (isActive) {
      clearInterval(intervalId);
      setIsActive(false);
      return;
    }

    setIsActive(true);
  };

  const handelClickRemove = () => {
    clearInterval(intervalId);
    deleteItem();
    dispatch(removeItem(item.id));
  };

  return (
    <Item isActive={isActive}>
      <StyledTitle>{item.name}</StyledTitle>
      <Wrapper>
        <Value>{normalizeTime(value)}</Value>
        <ChangeBtn isActive={isActive} onClick={handleClickStart} />
        <RemoveBtn onClick={handelClickRemove} />
      </Wrapper>
    </Item>
  );
};

StopWatchItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default StopWatchItem;
