import { useState, useEffect } from 'react';
import { Item, Wrapper, StyledTitle } from './StopWatchItem.styled';
import moment from 'moment';
import normalizeTime from 'helpers/normalizeTime';
import useStorage from 'hooks/useStorage';

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

  const handleClick = () => {
    if (isActive) {
      clearInterval(intervalId);
      setIsActive(false);
      return;
    }

    setIsActive(true);
  };

  return (
    <Item>
      <StyledTitle>{item.name}</StyledTitle>
      <Wrapper>
        <p>{normalizeTime(value)}</p>
        <button onClick={handleClick}>start/stop</button>
        <button>remove</button>
      </Wrapper>
    </Item>
  );
};

export default StopWatchItem;
