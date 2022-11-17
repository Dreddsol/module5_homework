let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', null, 'e','o','l', 28];
let itemNumGood = 0;
let itemNumBed = 0;
let itemNumOther = 0;

for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        itemNumOther++;
    } else {
        if (arr[i] % 2 === 0) {
            itemNumGood++;
        } else {
            itemNumBed++;
        }
    }
}
console.log("Чётные " + itemNumGood);
console.log("Нечётные " + itemNumBed);
console.log("Другое " + itemNumOther);