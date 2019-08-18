var length = (array) => {
    var result = 0;
    array.forEach((element) => {
        result ++;
    });
    return result;
};

console.log(length([1,2,3,4,5,6,7,8,9]));


var sum = (array) => {
    var result = 0;
    array.forEach((element) => {
        result += element;
    });
    return result;
};

console.log(sum([1,2,3,4,5,6,7,8,9]));