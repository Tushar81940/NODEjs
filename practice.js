//Debounce a function
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);    
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }
        , delay);
    };
}

function sayHello(name){
    console.log("Hello " + name);
}

const debouncedSayHello = debounce(sayHello, 2000);
debouncedSayHello("Alice");

