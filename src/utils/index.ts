import { useEffect, useState } from "react"

export const isFalsy = (value: unknown) => value === 0 ? false : !value

export const cleanObject = (object: object) => {
  const result = {...object}
  Object.keys(result).forEach(key => {
    //@ts-ignore
    const value = result[key]
    if(isFalsy(value)) {
      //@ts-ignore
      delete result[key]
    }
  })

  return result
}

export const useDebounce = <S>(value: S, delay?: number): S => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay)
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debounceValue;
}

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};