export default function hasUnit(value:string) {
  const unitRegex = /[A-Za-z%]+$/; 
  const hasUnit = unitRegex.test(value);
  if(!hasUnit)
  console.warn(`${value} check the unit or add a unit `)
  return hasUnit;
}