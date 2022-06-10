import { useCallback, useState } from "react";

export default function useLocalStorage(key, initialValue = "") {
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    },
    [key]
  );

  const remove = () => {
    localStorage.removeItem(key);
  };

  return [state, setValue, remove];
}
