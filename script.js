function removeElement(array, item) {
    return array.filter(element => element !== item);
}

const ar = [1, 3, 4, 6, 2, 5, 7];
console.log(removeElement(ar, 4)); // Результат: [1, 3, 6, 2, 5, 7]


