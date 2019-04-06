var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// First sorts by name ASCENDING alphabetically
// Afterward, check if names are same, and sort DESCENDING by age if applicable
function customComparator(students) {
  // Sort by name first
  students.sort(function(name_a, name_b) {
    if (name_a.name < name_b.name)
      return -1;
    else if (name_a.name > name_b.name)
      return 1;
  });

  // With students sorted by name alphabetically,
  // then check for students with same name.
  // If same name found, sort these students by descending age.
  students.sort(function(a, b) {
    if (a.name === b.name) {
      if (a.age > b.age)
        return -1;
      else if (a. age < b.age)
        return 1;
    }
  });

  return students;
}

console.log(customComparator(students));