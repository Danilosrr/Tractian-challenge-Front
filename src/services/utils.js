import { useState } from 'react';

export function statusColor(status) {
  if (status === 'Running') return '#5FBF00';
  if (status === 'Alerting') return '#FECE00';
  if (status === 'Stopped') return '#F63D52';
};

export function groupBy(array, key) {
  const group = array.reduce((hash, obj) => {
    if (obj[key] === undefined) return hash;
    return Object.assign(hash, { [obj[key]]: (hash[obj[key]] || []).concat(obj) })
  }, {});

  return Object.keys(group).map( (key)=> { 
    return { name: key, y: group[key].length, color: statusColor(key)}
  });
};

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.log(error);
    }
  };

  return [storedValue, setValue];
}