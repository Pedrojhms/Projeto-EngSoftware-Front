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

// import { useEffect, useRef, useState } from "react";

// export default function useLocalStorage(key, initialValue = "") {
//   const [state, setState] = useState(() => {
//     try {
//       const storedValue = localStorage.getItem(key);
//       return storedValue ? JSON.parse(storedValue) : initialValue;
//     } catch {
//       return initialValue;
//     }
//   });
//   const firstRender = useRef(true);

//   useEffect(() => {
//     try {
//       if (firstRender.current) {
//         firstRender.current = false;
//         return;
//       }
//       localStorage.setItem(key, JSON.stringify(state));
//     } catch (error) {
//       console.log(error);
//     }
//   }, [state]);

//   return [state, setState];
// }
