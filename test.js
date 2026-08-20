import HashMap from "./hashmap.js"

const test = new HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log('length após popular (12 itens):', test.length()); 
console.log('capacity ainda deve ser 16:', test.capacity);

test.set('apple', 'green apple');
test.set('dog', 'black dog');
console.log('length após overwrite (deve continuar 12):', test.length());

test.set('moon', 'silver');
console.log('length após crescer:', test.length()); 
console.log('capacity após crescer (deve dobrar para 32):', test.capacity);
console.log('load atual:', (test.length() / test.capacity).toFixed(2));

test.set('moon', 'silver bright');
console.log('get(moon):', test.get('moon'));
 
console.log('has(banana):', test.has('banana')); 
console.log('has(unicorn):', test.has('unicorn')); 
 
console.log('remove(frog):', test.remove('frog')); 
console.log('remove(unicorn):', test.remove('unicorn')); 
console.log('length após remove:', test.length());
 
console.log('keys:', test.keys());
console.log('values:', test.values());
console.log('entries:', test.entries());
