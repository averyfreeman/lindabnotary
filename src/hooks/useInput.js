import { useEffect, useState } from 'react';

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    console.log(`current value: ${value}`);
  }, [value]);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: e => {
        setValue(e.target.value);
      },
    },
  };
};
