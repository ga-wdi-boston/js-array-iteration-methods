![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JavaScript Array methods

## Prerequisites

- [JavaScript Functions "Ins & Outs"](https://github.com/ga-wdi-boston/js-functions-ins-and-outs)

## Introduction

We'll look at the array methods that allow us to test and transform arrays more simply and consistently.

## Objectives

By the end of this lesson, students should be able to:

- Write callbacks to pass to array methods
- Write functions to emulate array methods
- Write functions using array methods to add functionality.

## Array Methods

We'll explore and implement proxies for a variety of the JavaScript Array methods.

[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Demo

The [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method iterates over all of the elements in an array.  

### Code along

The [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method returns a new array containing a transformation of each element in this array.

### Lab

Write a function, mutate, that takes an array and a function as arguments and changes the array in place based on the return value of invoking transform.

```js
const mutate = function mutate(array, transform) {

};
```

### Demo

The [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) produces a single value from operating on all the values in the array.  It "reduces" many to one.

### Code along

The [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) method checks to see if all elements of an array meet some test.  The function used for this should only return `true` or `false`.  This type of function is often called a predicate.

## Additional Resources

The [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) and [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) methods are often quite useful.

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
