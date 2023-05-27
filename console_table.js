const employees = [
  { id: 1, name: 'John', department: 'Sales', salary: 50000 },
  { id: 2, name: 'Jane', department: 'Marketing', salary: 60000 },
  { id: 3, name: 'Mike', department: 'IT', salary: 70000 },
  { id: 4, name: 'Sara', department: 'Finance', salary: 55000 }
];

console.table(employees);
console.table(employees, ['name', 'salary']);