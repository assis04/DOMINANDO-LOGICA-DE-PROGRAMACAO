const array1 = [1, 2, 3];
array1.push(4);
console.log(array1);
array1.unshift(0);
console.log(array1);//É mais lento que o push, pois ele tem que mover todos os elementos para a direita
console.log("--------------------------------------------");

const array2 = [1, "word", 3.14, { a: 1 }];
array2[0];
console.log(array2[3]);


function search(array2, element) {
    for (let i = 0; i < array2.length; i++) {
        if (element === array2[i]) {
            return i;
        }
    }
}

console.log(search(array2, 3.14));
console.log("--------------------------------------------");

const array = [0, 1, 2, 3, 4, 5,];

function deleteElement(array, element) {
    const index = search(array, element);
    array.splice(index, 1);
}
function search2(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (element === array[i]) {
            return i;
        }
    }
}

console.log(array);
deleteElement(array, 1);
console.log(array);
console.log("--------------------------------------------")


