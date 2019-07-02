Promise.resolve();
console.log("Hi");
(async function(params) {
    await foo();
})();

async function foo() {
    console.log("foo");
}
