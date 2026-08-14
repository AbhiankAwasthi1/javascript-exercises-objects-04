let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

let getAverageAge = function(arr) {
    const reduced = arr.reduce((total, user) => {
        return user.age + total;
    }, 0);
    const averageAge = reduced / arr.length;
    return averageAge;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28