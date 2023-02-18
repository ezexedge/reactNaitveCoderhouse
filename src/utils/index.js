export function sum(obj, id) {
  let acum = 0;
  obj = obj.filter((val) => val.categoryId === id);
  for (const val of obj) {
    acum += val.price;
  }
  return acum;
}
