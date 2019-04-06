var pets = ['cat','dog','rat'];
for (var i = 0; i < pets.length; i++) {
  pets[i] = pets[i] + 's';
}
console.log('The array is',pets.length,'long.');
console.log(pets);