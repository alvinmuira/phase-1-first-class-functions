function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction () {
    return function Named () {
        // This function has a name
 } 
}
function returnsAnAnonymousFunction() {
    return () => {
        // Anonymous
    }
}