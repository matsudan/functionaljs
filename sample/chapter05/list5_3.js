var compare = (n, m) => {
    if (n>m) {
        return 1;
    } else {
        if (n === m) {
            return 0;
        } else {
            return -1;
        }
    }
};

console.log(compare(5, 10));
