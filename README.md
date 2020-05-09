# Async one liner (or so) functions

> Some examples of async utility functions, to handle things like
> mapping an array using an async callback, awaiting for a certain
> timeout before invoking a function etc.
>
> The functions are just a few lines long, written in Typescript.
> They can be used as examples to build more robust solutions.

## Functions

Functions are divided in categories. You can see them in the source files (linked below).

### Array

- [every](src/array/async-array-every.ts)
- [filter](src/array/async-array-filter.ts)
- [find](src/array/async-array-find.ts)
- [findIndex](src/array/async-array-findIndex.ts)
- [map](src/array/async-array-map.ts)
- [reduce](src/array/async-array-reduce.ts)
- [reduceRight](src/array/async-array-reduceRight.ts)
- [resolve](src/array/async-array-resolve.ts)
- [resolveFirst](src/array/async-array-resolveFirst.ts)
- [some](src/array/async-array-some.ts)

### Exec

- [compose](src/array/async-array-compose.ts)
- [pipe](src/array/async-array-pipe.ts)
- [promisify](src/array/async-array-promisify.ts)
- [timeout](src/array/async-array-timeout.ts)
- [wait](src/array/async-array-wait.ts)
