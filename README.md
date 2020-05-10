# Async one liner (or so) functions

> Some examples of async utility functions, to handle things like
> mapping an array using an async callback, awaiting for a certain
> timeout before invoking a function etc.
>
> The functions are just a few lines long, and are written in Typescript.
> They are not complete - there is no error handling, just to name one -
> but they might be a starting point to build something more robust.

* * *

## Modules

<dl>
<dt><a href="#module_array">array</a></dt>
<dd><p>Functions to handle arrays and async functions.</p>
<p>Most of the functions here are similar to the standard
functions provided by the language, such as <code>Array.map</code>
or <code>Array.reduce</code>, but with async.</p>
</dd>
<dt><a href="#module_exec">exec</a></dt>
<dd><p>Functions to handle code execution.</p>
<p>These functions allow to compose async functions,
calling <code>setTimeout</code> without callbacks (but with
the use of <code>await</code> instead) and so on.</p>
</dd>
</dl>

<a name="module_array"></a>

## array
Functions to handle arrays and async functions.

Most of the functions here are similar to the standard
functions provided by the language, such as `Array.map`
or `Array.reduce`, but with async.


* [array](#module_array)
    * _static_
        * [.every(source, callback)](#module_array.every) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [.filter(source, callback)](#module_array.filter) ⇒ <code>Array.&lt;Promise.&lt;T&gt;&gt;</code>
        * [.find(source, callback)](#module_array.find) ⇒ <code>Promise.&lt;(T\|undefined)&gt;</code>
        * [.findIndex(source, callback)](#module_array.findIndex) ⇒ <code>Promise.&lt;number&gt;</code>
        * [.map(source, callback)](#module_array.map) ⇒ <code>Promise.&lt;Array.&lt;U&gt;&gt;</code>
        * [.reduce(source, callback, initialValue)](#module_array.reduce) ⇒ <code>Promise.&lt;U&gt;</code>
        * [.reduceRight(source, callback, initialValue)](#module_array.reduceRight) ⇒ <code>Promise.&lt;U&gt;</code>
        * [.resolve(source)](#module_array.resolve) ⇒ <code>Promise.&lt;Array.&lt;T&gt;&gt;</code>
        * [.resolveFirst(source)](#module_array.resolveFirst) ⇒ <code>Promise.&lt;T&gt;</code>
        * [.some(source, callback)](#module_array.some) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * _inner_
        * [~callbackAsyncArrayTest](#module_array..callbackAsyncArrayTest) ⇒ <code>Promise.&lt;boolean&gt;</code>
        * [~callbackAsyncArrayMap](#module_array..callbackAsyncArrayMap) ⇒ <code>Promise.&lt;U&gt;</code>
        * [~callbackAsyncArrayReduce](#module_array..callbackAsyncArrayReduce) ⇒ <code>Promise.&lt;U&gt;</code>

<a name="module_array.every"></a>

### array.every(source, callback) ⇒ <code>Promise.&lt;boolean&gt;</code>
Checks if all the items in the input array pass the test
implemented by the async `callback` function.

The async callback function receives the following parameters:

- `value`: the current value in the array
- `index`: the current index
- `array`: the whole input array

It should return a Promise resolved with:

- `true` if the item passes the test
- `false` if the item does not pass the test

**Kind**: static method of [<code>array</code>](#module_array)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A Promise resolved with the boolean result  
**See**: [src/array/async-array-every.ts](src/array/async-array-every.ts)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array.&lt;T&gt;</code> | The input array |
| callback | [<code>callbackAsyncArrayTest</code>](#module_array..callbackAsyncArrayTest) | The async callback |

<a name="module_array.filter"></a>

### array.filter(source, callback) ⇒ <code>Array.&lt;Promise.&lt;T&gt;&gt;</code>
Gets an array and filters the items using an async filter function.

The filter function is executed on each item and receives the following parameters:

- `value`: the current value
- `index`: the current index
- `array`: the whole input array

The async filter function should return a Promise resolved with:

- `true` to keep the item
- `false` to get rid of the item

**Kind**: static method of [<code>array</code>](#module_array)  
**Returns**: <code>Array.&lt;Promise.&lt;T&gt;&gt;</code> - A Promise resolved with the filtered array  
**See**: [src/array/async-array-filter.ts](src/array/async-array-filter.ts)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array.&lt;T&gt;</code> | The input array |
| callback | [<code>callbackAsyncArrayTest</code>](#module_array..callbackAsyncArrayTest) | The async callback |

<a name="module_array.find"></a>

### array.find(source, callback) ⇒ <code>Promise.&lt;(T\|undefined)&gt;</code>
Finds the first item in the array that passes the test implemented
by the provided async callback function, and returns a Promise
resolved with the found value.

If no value is found, the returned Promise is resolved with `undefined`.

The async callback function receives the following parameters:

- `value`: the current value in the array
- `index`: the current index
- `array`: the whole input array

It should return a Promise resolved with:

- `true` if the item passes the test
- `false` if the item does not pass the test

**Kind**: static method of [<code>array</code>](#module_array)  
**Returns**: <code>Promise.&lt;(T\|undefined)&gt;</code> - A Promise resolved with the found value, or undefined  
**See**: [src/array/async-array-find.ts](src/array/async-array-find.ts)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array.&lt;T&gt;</code> | The input array |
| callback | [<code>callbackAsyncArrayTest</code>](#module_array..callbackAsyncArrayTest) | The async callback |

<a name="module_array.findIndex"></a>

### array.findIndex(source, callback) ⇒ <code>Promise.&lt;number&gt;</code>
Finds the first item in the array that passes the test implemented
by the provided async callback function, and returns a Promise
resolved with the index of the found value.

If no value is found, the returned Promise is resolved with `-1`.

The async callback function receives the following parameters:

- `value`: the current value in the array
- `index`: the current index
- `array`: the whole input array

It should return a Promise resolved with:

- `true` if the item passes the test
- `false` if the item does not pass the test

**Kind**: static method of [<code>array</code>](#module_array)  
**Returns**: <code>Promise.&lt;number&gt;</code> - A Promise resolved with the found index, or -1 of not found  
**See**: [src/array/async-array-findIndex.ts](src/array/async-array-findIndex.ts)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array.&lt;T&gt;</code> | The input array |
| callback | [<code>callbackAsyncArrayTest</code>](#module_array..callbackAsyncArrayTest) | The async callback |

<a name="module_array.map"></a>

### array.map(source, callback) ⇒ <code>Promise.&lt;Array.&lt;U&gt;&gt;</code>
Gets an array and executes an async callback on each item in the array.

The async callback receives the following parameters:

- `value`: the current value in the array
- `index`: the current index
- `array`: the whole input array

**Kind**: static method of [<code>array</code>](#module_array)  
**Returns**: <code>Promise.&lt;Array.&lt;U&gt;&gt;</code> - A promise resolved with the mapped array  
**See**: [src/array/async-array-map.ts](src/array/async-array-map.ts)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array.&lt;T&gt;</code> | The input array |
| callback | [<code>callbackAsyncArrayMap</code>](#module_array..callbackAsyncArrayMap) | The async callback |

<a name="module_array.reduce"></a>

### array.reduce(source, callback, initialValue) ⇒ <code>Promise.&lt;U&gt;</code>
Executes a reducer async function on each item of the array,
and returns a Promise resolved with a single output value.

The reducer function receives the following parameters:

- `accumulator`: the current reduced value
- `value`: the current array value being evaluated
- `index`: the current index being evaluated
- `array`: the whole input array

The first time the reducer function is invoked, it receives
the `initialValue` as the `accumulator` argument. The second
time, it will receive the returned value of the first
invocation, and so on.

**Kind**: static method of [<code>array</code>](#module_array)  
**Returns**: <code>Promise.&lt;U&gt;</code> - A Promise resolved with the reduced value  
**See**: [src/array/async-array-reduce.ts](src/array/async-array-reduce.ts)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array.&lt;T&gt;</code> | The input array |
| callback | [<code>callbackAsyncArrayReduce</code>](#module_array..callbackAsyncArrayReduce) | The async callback |
| initialValue | <code>U</code> | The initial value |

<a name="module_array.reduceRight"></a>

### array.reduceRight(source, callback, initialValue) ⇒ <code>Promise.&lt;U&gt;</code>
Executes a reducer async function on each item of the array,
and returns a Promise resolved with a single output value.
The array is evaluated in reverse order (from the last item).

The reducer function receives the following parameters:

- `accumulator`: the current reduced value
- `value`: the current array value being evaluated
- `index`: the current index being evaluated
- `array`: the whole input array

The first time the reducer function is invoked, it receives
the `initialValue` as the `accumulator` argument. The second
time, it will receive the returned value of the first
invocation, and so on.

**Kind**: static method of [<code>array</code>](#module_array)  
**Returns**: <code>Promise.&lt;U&gt;</code> - A Promise resolved with the reduced value  
**See**: [src/array/async-array-reduceRight.ts](src/array/async-array-reduceRight.ts)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array.&lt;T&gt;</code> | The input array |
| callback | [<code>callbackAsyncArrayReduce</code>](#module_array..callbackAsyncArrayReduce) | The async callback |
| initialValue | <code>U</code> | The initial value |

<a name="module_array.resolve"></a>

### array.resolve(source) ⇒ <code>Promise.&lt;Array.&lt;T&gt;&gt;</code>
Resolves the array of promises

**Kind**: static method of [<code>array</code>](#module_array)  
**Returns**: <code>Promise.&lt;Array.&lt;T&gt;&gt;</code> - A promise resolved with an array of the resolved promises  
**See**: [src/array/async-array-resolve.ts](src/array/async-array-resolve.ts)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array.&lt;Promise.&lt;T&gt;&gt;</code> | An array of Promises |

<a name="module_array.resolveFirst"></a>

### array.resolveFirst(source) ⇒ <code>Promise.&lt;T&gt;</code>
Returns the value of the first promise that is resolved in the array.

**Kind**: static method of [<code>array</code>](#module_array)  
**Returns**: <code>Promise.&lt;T&gt;</code> - The first resolved Promise  
**See**: [src/array/async-array-resolveFirst.ts](src/array/async-array-resolveFirst.ts)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array.&lt;Promise.&lt;T&gt;&gt;</code> | An array of Promises |

<a name="module_array.some"></a>

### array.some(source, callback) ⇒ <code>Promise.&lt;boolean&gt;</code>
Checks if at least one item in the input array passes the
test implemented by the async callback function.

The async callback function receives the following parameters:

- `value`: the current value in the array
- `index`: the current index
- `array`: the whole input array

It should return a Promise resolved with:

- `true` if the item passes the test
- `false` if the item does not pass the test

**Kind**: static method of [<code>array</code>](#module_array)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A Promise resolved with the boolean result  
**See**: [src/array/async-array-some.ts](src/array/async-array-some.ts)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array.&lt;T&gt;</code> | The input array |
| callback | [<code>callbackAsyncArrayTest</code>](#module_array..callbackAsyncArrayTest) | The async callback |

<a name="module_array..callbackAsyncArrayTest"></a>

### array~callbackAsyncArrayTest ⇒ <code>Promise.&lt;boolean&gt;</code>
The callback invoked to test if each element in the input
array passes the test implemented. The callback returns a
`Promise` that resolves with a boolean:

- `true` if the item passes the test
- `false` if the item does not pass the test

**Kind**: inner typedef of [<code>array</code>](#module_array)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A Promise resolved with the boolean result  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>T</code> | The current value being evaluated |
| index | <code>number</code> | The current index being evaluated |
| array | <code>Array.&lt;T&gt;</code> | The whole input array |

<a name="module_array..callbackAsyncArrayMap"></a>

### array~callbackAsyncArrayMap ⇒ <code>Promise.&lt;U&gt;</code>
The callback invoked to map the value of each element in the
input array into a new value.

**Kind**: inner typedef of [<code>array</code>](#module_array)  
**Returns**: <code>Promise.&lt;U&gt;</code> - A Promise resovled with the mapped value  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>T</code> | The current value being evaluated |
| index | <code>number</code> | The current index being evaluated |
| array | <code>Array.&lt;T&gt;</code> | The whole input array |

<a name="module_array..callbackAsyncArrayReduce"></a>

### array~callbackAsyncArrayReduce ⇒ <code>Promise.&lt;U&gt;</code>
The callback invoked by the reducers. The function is executed
on each value of the input array, and receives in input the value
calculated in the previous execution (the `accumulator`).

**Kind**: inner typedef of [<code>array</code>](#module_array)  
**Returns**: <code>Promise.&lt;U&gt;</code> - A Promise resolved with the accumulated value  

| Param | Type | Description |
| --- | --- | --- |
| accumulator | <code>U</code> | The accumulated value |
| value | <code>T</code> | The current value being evaluated |
| index | <code>number</code> | The current index being evaluated |
| array | <code>Array.&lt;T&gt;</code> | The whole input array |

<a name="module_exec"></a>

## exec
Functions to handle code execution.

These functions allow to compose async functions,
calling `setTimeout` without callbacks (but with
the use of `await` instead) and so on.


* [exec](#module_exec)
    * _static_
        * [.compose()](#module_exec.compose) ⇒ [<code>asyncComposedFunction</code>](#module_exec..asyncComposedFunction)
        * [.pipe()](#module_exec.pipe) ⇒ [<code>asyncComposedFunction</code>](#module_exec..asyncComposedFunction)
        * [.promisify(func)](#module_exec.promisify) ⇒ <code>function</code>
        * [.timeout(callback, time)](#module_exec.timeout) ⇒ <code>Promise.&lt;T&gt;</code>
        * [.wait(time)](#module_exec.wait) ⇒ <code>Promise.&lt;void&gt;</code>
    * _inner_
        * [~asyncComposedFunction](#module_exec..asyncComposedFunction) ⇒ <code>Promise.&lt;unknown&gt;</code>

<a name="module_exec.compose"></a>

### exec.compose() ⇒ [<code>asyncComposedFunction</code>](#module_exec..asyncComposedFunction)
Returns a new function that will execute the async functions
provided as input for `compose`, in reverse order.

The returned function receives one parameter in input; this
parameter is the only argument of the last function; the output
of the last function will be the argument of the second last, and so on.

**Kind**: static method of [<code>exec</code>](#module_exec)  
**Returns**: [<code>asyncComposedFunction</code>](#module_exec..asyncComposedFunction) - The composed function  
**See**: [src/array/async-exec-compose.ts](src/array/async-exec-compose.ts)  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | <code>function</code> | The functions to execute |

<a name="module_exec.pipe"></a>

### exec.pipe() ⇒ [<code>asyncComposedFunction</code>](#module_exec..asyncComposedFunction)
Returns a new function that will execute the async functions
provided as input for `pipe`, in order.

The returned function receives one parameter in input; this
parameter is the only argument of the first function; the output
of the first function will be the argument of the second, and so on.

**Kind**: static method of [<code>exec</code>](#module_exec)  
**Returns**: [<code>asyncComposedFunction</code>](#module_exec..asyncComposedFunction) - The composed function  
**See**: [src/array/async-exec-pipe.ts](src/array/async-exec-pipe.ts)  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | <code>function</code> | The functions to execute |

<a name="module_exec.promisify"></a>

### exec.promisify(func) ⇒ <code>function</code>
Takes a function that has a callback as the last parameter,
and returns a new function that takes the same arguments as
the input function, but the callback.

The returned function is async and is resolved when the
original callback is invoked.

**Kind**: static method of [<code>exec</code>](#module_exec)  
**Returns**: <code>function</code> - A function that returns a Promise that is resolved when the input function callback would be invoked  
**See**: [src/array/async-exec-promisify.ts](src/array/async-exec-promisify.ts)  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | A function with callback as its last parameter |

<a name="module_exec.timeout"></a>

### exec.timeout(callback, time) ⇒ <code>Promise.&lt;T&gt;</code>
Execute the provided `callaback` after `time` ms.
Just as `setTimeout`, but async.

**Kind**: static method of [<code>exec</code>](#module_exec)  
**Returns**: <code>Promise.&lt;T&gt;</code> - A Promise that is resolved with the return value of the callback, after the time is expired  
**See**: [src/array/async-exec-timeout.ts](src/array/async-exec-timeout.ts)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback to invoke |
| time | <code>number</code> | The time to wait |

<a name="module_exec.wait"></a>

### exec.wait(time) ⇒ <code>Promise.&lt;void&gt;</code>
Just waits for `time` ms.
Use await to stop the execution for that much time.

**Kind**: static method of [<code>exec</code>](#module_exec)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A Promise that is resolved when the specified time expires  
**See**: [src/array/async-exec-wait.ts](src/array/async-exec-wait.ts)  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | The time to wait |

<a name="module_exec..asyncComposedFunction"></a>

### exec~asyncComposedFunction ⇒ <code>Promise.&lt;unknown&gt;</code>
An async function that is the result of the composition of others.

**Kind**: inner typedef of [<code>exec</code>](#module_exec)  
**Returns**: <code>Promise.&lt;unknown&gt;</code> - A Promise resolved with the result of the invocation of all the functions that composed this one  

| Param | Type | Description |
| --- | --- | --- |
| initialValue | <code>T</code> | The accumulated value |

