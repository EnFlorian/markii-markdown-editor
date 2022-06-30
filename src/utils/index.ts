const storeToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "");
};

export { storeToLocalStorage, getFromLocalStorage };
