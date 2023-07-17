export default function hasUnit(value:string) {
  const unitRegex = /[A-Za-z%]+$/; 
  if(!unitRegex)
  console.warn(`${value} check the unit or add a unit `)
  return unitRegex.test(value);
}