export const loadDataFromLocalStorage = (key: string) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : [];
};