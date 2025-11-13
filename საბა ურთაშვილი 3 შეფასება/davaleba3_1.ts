
interface Person1 {
  name: string;
  age: number;
}

interface Person2 extends Person1 {
  id: number;
  department: string;
}

const user: Person2 = {
  name: "Nika",
  age: 25,
  id: 101,
  department: "IT"
};

console.log(user);