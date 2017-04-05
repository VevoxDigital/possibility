# Possibility
It may or may not be a possibility.

----

```
npm install possibility
```

A simple optional library for NodeJS, based on Java 8's [Optional](https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html).

## Usage

```javascript
var Possibility = require('possibility')

// Make a possibility from some function that
// may or may not have yielded something.
var ps = Possibility.of(goGetSomeThing())
var present = ps.isPresent()

// Or, maybe to need your possibility to be empty.
var emptyPs = Possibility.empty()
console.log(ps.isPresent()) // false
```

## Docs
Read more on [our wiki](http://wiki.vevox.io/projects/possibility).
