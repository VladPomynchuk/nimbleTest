import { useState } from 'react';
import moment from 'moment';
const LS_KEY = 'values';

const useStorage = item => {
  const { id } = item;
  const storage = JSON.parse(localStorage.getItem(LS_KEY));
  const [isActive, setIsActive] = useState(() => {
    return storage?.[id]?.isActive ?? true;
  });

  const currentTime = storage?.[id]?.currentTime || null;
  const [value, setValue] = useState(() => {
    if (storage?.[id]?.isActive) {
      return storage?.[id]?.value + moment().diff(storage?.[id].currentTime);
    }
    return storage?.[id]?.value || 0;
  });

  localStorage.setItem(
    LS_KEY,
    JSON.stringify({
      ...storage,
      [id]: { value: value, currentTime: moment(), isActive: isActive },
    })
  );

  const deleteItem = () => {
    delete storage?.[id];

    localStorage.setItem(LS_KEY, JSON.stringify(storage));
  };

  return {
    currentTime,
    isActive,
    value,
    setValue,
    setIsActive,
    deleteItem,
  };
};

export default useStorage;
