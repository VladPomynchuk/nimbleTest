import { useState, useEffect } from 'react';
import { Item, Wrapper, StyledTitle } from './StopWatchItem.styled';
import moment from 'moment';
import normalizeTime from 'helpers/normalizeTime';
import useStorage from 'hooks/useStorage';
import { useDispatch } from 'react-redux';
import { removeItem } from 'redux/stopWatchSlice';

const StopWatchItem = ({ item }) => {
  const {
    isActive,
    currentTime,
    value,
    setValue,
    setCurrentTime,
    setIsActive,
  } = useStorage(item);
  const [intervalId, setIntervalId] = useState(null);
  const dispatch = useDispatch();

  localStorage.setItem(
    item.id,
    JSON.stringify({
      currentTime: currentTime,
      isActive: isActive,
      value: value,
    })
  );

  useEffect(() => {
    if (isActive) {
      setIntervalId(
        setInterval(() => {
          console.log('interval useEffect');
          setValue(state => state + 1000);
          setCurrentTime(moment());
        }, 1000)
      );
    }
  }, [isActive, setCurrentTime, setValue]);

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
    localStorage.removeItem(item.id);
    dispatch(removeItem(item.id));
  };

  return (
    <Item>
      <StyledTitle>{item.name}</StyledTitle>
      <Wrapper>
        <p>{normalizeTime(value)}</p>
        <button onClick={handleClickStart}>start/stop</button>
        <button onClick={handelClickRemove}>remove</button>
      </Wrapper>
    </Item>
  );
};

export default StopWatchItem;
