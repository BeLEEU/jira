import { useEffect, useState } from "react"

export const isFalsy = (value: unknown) => value === 0 ? false : !value
export const isVoid = (value: unknown) => value === undefined || value === null || value === ''
export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = {...object}
  Object.keys(result).forEach(key => {
    const value = result[key]
    if(isVoid(value)) {
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
    //TODO 依赖项里加callback会造成无限循环，这个和usecallback和useMemo有关系
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};