var empty = () => {
    return (pattern) => {
        return pattern.empty();
    };
};

var cons = (value, list) => {
    return (pattern) => {
        console.log(pattern);
        return pattern.cons(value, list);
    };
};

var match = (data, pattern) => {
    return data(pattern);
};

var isEmpty = (alist) => {
    return match(alist, {
        empty: (_) => {
            return true;
        },
        cons: (head, tail) => {
            return false;
        }
    });
};

var head = (alist) => {
    return match(alist, {
        empty: (_) => {
            return null;
        },
        cons: (head, tail) => {
            return head;
        }
    });
};

var tail = (alist) => {
    return match(alist, {
        empty: (_) => {
            return null;
        },
        cons: (head, tail) => {
            return tail;
        }
    });
};

console.log(isEmpty(empty()));
console.log(isEmpty(cons(1, empty())));
console.log(head(cons(1, empty())));
console.log(head(tail(cons(1, cons(2, empty())))));