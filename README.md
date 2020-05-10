# Async one liner (or so) functions

> Some examples of async utility functions, to handle things like
> mapping an array using an async callback, awaiting for a certain
> timeout before invoking a function etc.
>
> The functions are just a few lines long, written in Typescript.
> They can be used as examples to build more robust solutions.

* * *

## Modules

<dl>
<dt><a href="#module_array">array</a></dt>
<dd></dd>
<dt><a href="#module_exec">exec</a></dt>
<dd></dd>
</dl>

<a name="module_array"></a>

## array

* [array](#module_array)
    * [.every(source, callback)](#module_array.every)
    * [.filter(source, callback)](#module_array.filter)
    * [.find(source, callback)](#module_array.find)
    * [.findIndex(source, callback)](#module_array.findIndex)
    * [.map(source, callback)](#module_array.map)
    * [.reduce(source, callback, initialValue)](#module_array.reduce)
    * [.reduceRight(source, callback, initialValue)](#module_array.reduceRight)
    * [.resolve(source)](#module_array.resolve) ⇒
    * [.resolveFirst(source)](#module_array.resolveFirst)
    * [.some(source, callback)](#module_array.some)

<a name="module_array.every"></a>

### array.every(source, callback)
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
**See**: src/array/async-array-every.ts  

| Param | Description |
| --- | --- |
| source | The input array |
| callback | The async callback |

<a name="module_array.filter"></a>

### array.filter(source, callback)
Gets an array and filters the items using an async filter function.

The filter function is executed on each item and receives the following parameters:

- `value`: the current value
- `index`: the current index
- `array`: the whole input array

The async filter function should return a Promise resolved with:

- `true` to keep the item
- `false` to get rid of the item

**Kind**: static method of [<code>array</code>](#module_array)  

| Param | Description |
| --- | --- |
| source | The input array |
| callback | The async filter callback |

<a name="module_array.find"></a>

### array.find(source, callback)
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

| Param | Description |
| --- | --- |
| source | The input array |
| callback | The async callback |

<a name="module_array.findIndex"></a>

### array.findIndex(source, callback)
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

| Param | Description |
| --- | --- |
| source | The input array |
| callback | The async callback |

<a name="module_array.map"></a>

### array.map(source, callback)
Gets an array and executes an async callback on each item in the array.

The async callback receives the following parameters:

- `value`: the current value in the array
- `index`: the current index
- `array`: the whole input array

**Kind**: static method of [<code>array</code>](#module_array)  

| Param | Description |
| --- | --- |
| source | The input array |
| callback | The async callback |

<a name="module_array.reduce"></a>

### array.reduce(source, callback, initialValue)
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

| Param | Description |
| --- | --- |
| source | The input array |
| callback | The reducer funciton |
| initialValue | The initial value |

<a name="module_array.reduceRight"></a>

### array.reduceRight(source, callback, initialValue)
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

| Param | Description |
| --- | --- |
| source | The input array |
| callback | The reducer funciton |
| initialValue | The initial value |

<a name="module_array.resolve"></a>

### array.resolve(source) ⇒
Resolves the array of promises

**Kind**: static method of [<code>array</code>](#module_array)  
**Returns**: The resolved array  

| Param | Description |
| --- | --- |
| source | An array of Promises |

<a name="module_array.resolveFirst"></a>

### array.resolveFirst(source)
Returns the value of the first promise that is resolved in the array.

**Kind**: static method of [<code>array</code>](#module_array)  

| Param | Description |
| --- | --- |
| source | An array of Promises |

<a name="module_array.some"></a>

### array.some(source, callback)
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

| Param | Description |
| --- | --- |
| source | The input array |
| callback | The async callback |

<a name="module_exec"></a>

## exec

* [exec](#module_exec)
    * [.compose()](#module_exec.compose)
    * [.pipe()](#module_exec.pipe)
    * [.promisify(func)](#module_exec.promisify)
    * [.timeout(callback, time)](#module_exec.timeout)
    * [.wait(time)](#module_exec.wait)

<a name="module_exec.compose"></a>

### exec.compose()
Returns a new function that will execute the async functions
provided as input for `compose`, in reverse order.

The returned function receives one parameter in input; this
parameter is the only argument of the last function; the output
of the last function will be the argument of the second last, and so on.

**Kind**: static method of [<code>exec</code>](#module_exec)  

| Param | Description |
| --- | --- |
| ...functions | The functions to execute |

<a name="module_exec.pipe"></a>

### exec.pipe()
Returns a new function that will execute the async functions
provided as input for `pipe`, in order.

The returned function receives one parameter in input; this
parameter is the only argument of the first function; the output
of the first function will be the argument of the second, and so on.

**Kind**: static method of [<code>exec</code>](#module_exec)  

| Param | Description |
| --- | --- |
| ...functions | The functions to execute |

<a name="module_exec.promisify"></a>

### exec.promisify(func)
Takes a function that has a callback as the last parameter,
and returns a new function that takes the same arguments as
the input function, but the callback.

The returned function is async and is resolved when the
original callback is invoked.

**Kind**: static method of [<code>exec</code>](#module_exec)  

| Param | Description |
| --- | --- |
| func | The function with callback |

<a name="module_exec.timeout"></a>

### exec.timeout(callback, time)
Execute the provided `callaback` after `time` ms.
Just as `setTimeout`, but async.

**Kind**: static method of [<code>exec</code>](#module_exec)  

| Param | Description |
| --- | --- |
| callback | The callback to invoke |
| time | The time to wait |

<a name="module_exec.wait"></a>

### exec.wait(time)
Just waits for `time` ms.
Use await to stop the execution for that much time.

**Kind**: static method of [<code>exec</code>](#module_exec)  

| Param | Description |
| --- | --- |
| time | The time to wait |

