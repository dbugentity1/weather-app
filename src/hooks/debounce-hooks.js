import { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
  const [debounceText, setDebounceText] = useState();
  
  useEffect(() => {
    const timerId =   setTimeout(() => {
      setDebounceText(value);
    }, delay);
    return (() => {
      clearTimeout(timerId);
    });
  }, [value, delay]);

  return debounceText;
};

export default useDebounce;