# HashMap / HashSet

A from-scratch implementation of a HashMap (plus a HashSet as extra credit)
in vanilla JavaScript, built with SOLID principles.

## Description

This project implements a hash map data structure without relying on any
external library. It handles hashing, collisions (via separate chaining)
and automatic resizing once the load factor is exceeded. A `HashSet` is
also included, built on top of the `HashMap` through composition, since a
set is essentially a map that only cares about keys.

### Files

```
hash.js       -> the hashing function only (string -> bucket index)
HashMap.js    -> the HashMap class (set, get, remove, grow, etc.)
HashSet.js    -> the HashSet class, composed on top of HashMap
test.js       -> test script following the assignment's script
```

## Stack

- **JavaScript (ES2020+)**
- **ES Modules** (`import` / `export`)
- **Node.js** (to run the tests) — no external dependencies, no frameworks

## How to run the tests

Make sure your `package.json` has `"type": "module"` (required for
`import`/`export` syntax to work in Node):

```json
{
  "name": "hashmap-project",
  "version": "1.0.0",
  "type": "module"
}
```

Then, from the project folder, run:

```bash
node test.js
```

You should see console output walking through every method: populating the
map, overwriting existing keys, triggering the resize when the load factor
is exceeded, and testing `get`, `has`, `remove`, `keys`, `values`,
`entries`, and `clear` — plus the equivalent `HashSet` checks at the end.

## Learnings

- **Separate chaining is a simple, effective way to handle collisions.**
- **Modulo on every loop iteration matters.** 
- **Growing the map means re-hashing everything.** 
- **Composition over inheritance.** 
- **Single Responsibility keeps debugging easy.** 