let x = '24',
item;
switch (typeof x !== 'symbol' && (isFinite(x) | typeof(x) === "string") && typeof(x)) {
  case "number":
    item = "x - число";
    break;
  case "string":
    item = "x - строка";
    break;
  case "boolean":
    item = "x - логическое";
    break;
  default:
    item = "Тип x не определен";
}
console.log(item)