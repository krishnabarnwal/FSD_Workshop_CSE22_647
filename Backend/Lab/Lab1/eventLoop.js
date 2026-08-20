console.log("This is the starting point of my code");

process.nextTick(() => {
    console.log("This is process.nextTick code.");
});

setTimeout(() => {
    console.log("This is first timeout function.");
}, 2000);

setTimeout(() => {
    console.log("This is second timeout function.");
}, 5000);

setTimeout(() => {
    console.log("This statement runs after 0 delay.");
}, 0);

new Promise((resolve, reject) => {
    let success = true;

    if (success)
        resolve("Data loaded successfully");
    else
        reject("Something went wrong");
})
.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
});

console.log("This is the end point of my code");