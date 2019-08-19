Promise.resolve(); // dummy call

console.log("Hi from top level!");
(async function(params) {
    await foo();
})();

async function foo() {
    console.log("Hi from the async function!");
}