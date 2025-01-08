export default function guardrail(mathFunction) {
  const data = [];
  try {
    const result = mathFunction();
    data.push(result, 'Guardrail was processed');
  } catch (error) {
    data.push(error.toString().split('\n')[0], 'Guardrail was processed');
  }
  return data;
}
