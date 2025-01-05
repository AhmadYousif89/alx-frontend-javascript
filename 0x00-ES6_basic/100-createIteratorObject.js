export default function createIteratorObject(report) {
  const result = [];

  for (const key in report) {
    if (Object.hasOwnProperty.call(report, key)) {
      if (key === 'allEmployees' && typeof report[key] === 'object') {
        for (const emp in report[key]) {
          if (Object.hasOwnProperty.call(report, key)) result.push(...report[key][emp]);
        }
      }
    }
  }
  return result;
}
