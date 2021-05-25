function multiply(x, y) {
    return new Promise(function(resolve, reject) {
        if (typeof x !== "number") {
            return reject("x is not a number");
        }
    
        return resolve();
    });
}

function whenDone(result) {
    console.log('here is the result: ' + result);
}

function whenFail(message) {
    console.log(message);
}

multiply(5, 5).catch(whenFail).then(whenDone);