![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JavaScript Array methods

## Prerequisites

-   [JavaScript Functions "Ins & Outs"](https://github.com/ga-wdi-boston/js-functions-ins-and-outs)

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Create a new branch, `training`, for your work.
1.  Install dependencies with `npm install`.

## Objectives

By the end of this lesson, students should be able to:

-   Write callbacks to pass to array methods
-   Write functions to emulate array methods
-   Write functions using array methods to add functionality.

## Array Methods

We'll look at the array methods that allow us to test and transform arrays more
 simply and consistently.

We'll explore and implement proxies for a variety of the JavaScript Array
 methods.

[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Callbacks

A callback is a function that gets passed into an initial function/method as an
 argument, so that the initial function/method can invoke it.

### Arrow Functions

We'll also be working with `arrow` (sometimes referred to as `fat arrow`)
 functions versus standard function declarations.

Arrow functions:

-   always have a bound `this`
-   **cannot** be used as a Constructor (no `new`, no `prototypes`)
-   no [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

```js
> typeof () => {}
'function'

> () => {} instanceof Function
true

```

### Demo

#### `forEach`

-   The [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
method iterates over all of the elements in an array.
-   Unlike a `for` loop, `forEach` cannot be stopped or broken out of
-   Does not change the elements of the original array and will return
 `undefined`

### Code Along

#### `map`

-   The [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
method returns a **new** array with the results of the functions applied to the
array it is called upon
-   The array it is called upon therefore is **not** mutated

### Lab

Write a function, `mutate`, that takes an array and a function as arguments and
***does** change the original array based on the return value of invoking
`transform`.

```js
const mutate = function(array, transform) {

};
```

### Demo

#### `reduce`

-   The [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
method returns a single value from operating on all the values in the array.  It
"reduces" many to one.
-   The original array `reduce` is invoked on does not change.

### Code Along

#### `every`

-   The [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
method checks to see if all elements of an array meet some test.  The function
used for this should only return `true` or `false`.  This type of function is
often called a predicate.

## Further Practice

Research the [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) and [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) methods as they are also useful.

-   What is the purpose of each?
-   What is returned from each?
-   Is the array they are called upon mutated?

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
