import { useState, useEffect } from 'react';

export const useDebounce = (value: string, milliSeconds: number) => {
  const [debouncedValue, setDebouncedValue] = useState<number | string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milliSeconds]);

  return debouncedValue;
};
