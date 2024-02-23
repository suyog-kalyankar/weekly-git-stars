import { useEffect, useState } from "react";

const useDebounce = (language: string) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(language);
    }, 500);
    return () => clearTimeout(timer);
  }, [language]);

  return { value };
};

export default useDebounce;
