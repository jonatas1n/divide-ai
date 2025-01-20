export const getFromLocalStorage = (type: string) => {
  const storedUser = localStorage.getItem(type);
  return storedUser ? JSON.parse(storedUser) : {};
}

type saveOnLocalStorageProps<T> = {
  type: string,
  data: T,
}

export const saveOnLocalStorage = <T>({type, data}: saveOnLocalStorageProps<T>) => {
  localStorage.setItem(type, JSON.stringify(data));
};
