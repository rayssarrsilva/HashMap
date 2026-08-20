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
  Storing an array of `[key, value]` pairs inside each bucket avoids the
  need for a full linked-list implementation while still correctly
  distinguishing two different keys that hash to the same index.
- **Modulo on every loop iteration matters.** Applying `% capacity` only
  after the loop finishes can cause the running hash code to exceed
  `Number.MAX_SAFE_INTEGER` with long keys, producing an inaccurate index.
  Applying it on every iteration keeps the number small and correct.
- **Growing the map means re-hashing everything.** Since the bucket index
  depends on `capacity`, doubling the capacity invalidates every existing
  index — every entry has to be re-inserted with `set()`, not just moved.
- **Composition over inheritance.** Building `HashSet` by wrapping a
  `HashMap` instance (instead of extending it or duplicating its logic)
  kept both classes small, avoided code duplication, and meant a bug fix
  in the hashing/collision logic only has to happen in one place.
- **Single Responsibility keeps debugging easy.** Separating the hash
  function into its own file made it trivial to test/reason about hashing
  in isolation from bucket management, which is exactly the kind of
  separation that makes a codebase approachable for someone new to it.