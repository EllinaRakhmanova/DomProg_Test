// 1.
const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];

function findUnique(arr) {
    let result = [];
    
    for (let i of arr) {
        if (!result.includes(i)) {
            result.push(i);
        }
    }

    console.log(result);
}

findUnique(array);

// 2.
const array2 = [2, 1, 3, 5];

function findMissing(arr) {
    let sum = 0;
    let diff = 0;

    for (let i of arr) {
        sum += i;
    }

    for (let n = 1; n <= arr.length + 1; n++) {
        diff += n;
    }

    console.log(diff - sum);

} 

findMissing(array2);

// 3.
var someList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function reversePrint(linkedList) {

    if (linkedList.next) {
        reversePrint(linkedList.next);
    }

    console.log(linkedList.value);
}

reversePrint(someList);
