function whenDone() {

}

function whenFail() {

}

fetch("https://someurl.com").catch(whenFail).then(whenDone);