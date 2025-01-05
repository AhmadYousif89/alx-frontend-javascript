export default function appendToEachArrayValue(array, appendString) {
  const list = [];
  for (const el of array) list.push(appendString + el);
  return list;
}
