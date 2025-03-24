import { useState, useEffect } from "react";

// Custom debounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // Cleanup the timeout when value changes
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
