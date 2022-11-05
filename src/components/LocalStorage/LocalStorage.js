const addId = (id) => {
  const quantity = localStorage.getItem(id);
  if (quantity) {
    const newQunatity = parseInt(quantity) + 1;
    localStorage.setItem(id, newQunatity);
  } else {
    localStorage.setItem(id, 1);
  }
};
export { addId };
