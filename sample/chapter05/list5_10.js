var match_for_mutable = (array) => {
    switch(array){
        case [1, 2, 3]:
            return true;
            break;
        default:
            return false;
    }
};

b = match_for_mutable([1, 2, 3]);
console.log(b);