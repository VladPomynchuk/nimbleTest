import { useState } from 'react';
import moment from 'moment';

const useStorage = item => {
  const [isActive, setIsActive] = useState(() => {
    const storage = JSON.parse(localStorage.getItem(item.id));
    return storage?.isActive ?? true;
  });
  const [currentTime, setCurrentTime] = useState(() => {
    const storage = JSON.parse(localStorage.getItem(item.id));
    return storage?.currentTime || null;
  });
  const [value, setValue] = useState(() => {
    const storage = JSON.parse(localStorage.getItem(item.id));
    if (storage?.isActive) {
      return storage.value + moment().diff(storage.currentTime);
    }
    return storage?.value || 0;
  });

  return {
    isActive,
    currentTime,
    value,
    setValue,
    setCurrentTime,
    setIsActive,
  };
};

export default useStorage;
