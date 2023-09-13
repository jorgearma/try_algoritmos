const margesort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2);

    let right = arr.slice(mid);
    let left = arr.slice(0, mid);

    return merge(margesort(left), margesort(right));
}

const merge = (left, right) => {
    let indexI = 0;
    let indexD = 0;
    let result = [];

    while (indexI < left.length && indexD < right.length) {
        if (left[indexI] < right[indexD]) {
            result.push(left[indexI]);
            indexI++;
        } else {
            result.push(right[indexD]);
            indexD++;
        }
    }
    return [...result, ...left.slice(indexI), ...right.slice(indexD)];
}

const numeros1 = [3, 5, 2, 3, 1, 5, 3, 7, 9, 5, 9];
const result3 = margesort(numeros1);

console.log(result3);
