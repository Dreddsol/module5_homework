let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 's', 2];

let masElement = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            masElement = false;
        }
    }
}
if (masElement) {
    console.log("Одинаковые");
} else {
    console.log("Не одинаковые");
}