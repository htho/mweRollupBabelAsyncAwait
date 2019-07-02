# Minimal Working Example for Rollup + Babel with async/await

This should become a minimal working example for JavaScript bundling with rollup and babel where async/await is correctly transpiled, to be compatible with IE11

Right now it does not work.
I hope to work it out with the creators of [rollup](https://github.com/rollup/rollup) and [rollup-plugin-babel](https://github.com/rollup/rollup-plugin-babel).

Once it works, these are the steps to bundle a project with async/await:

```sh
# clone
$ git clone https://github.com/htho/mweRollupBabelAsyncAwait.git

# install
$ npm i

# bundle
$ ./node_modules/.bin/rollup -c

# start a server
$ ./node_modules/.bin/http-server -p 8080

# visit http://localhost:8080/BuildTest.html
# check if "Hi" and "foo" is printed to your console.
```

