//App.tsx
import TodoList from "./TodoList"
import './App.css';

function App(){

  const fullName: string = "Coding Temple"
  const year: number = 2024
  const isThisBootCampFun: boolean = true;
  
  type Person = {
    name: string;
    age: number;
  };

  const person1: Person = {
    name: "Alex",
    age: 26,
  };
  
  const fruits: string[] = ["Bananas", "Orange", "Grapes"];
  console.log("Fruits ", fruits); 

  /* added code starts here */
  const shapeShifter: any = {
    name: 24,
    age: 'Alex'
  }

  const printToConsole = (value: string): void => {
    console.log(value);
  }

  const cat: null = null;
  const dog: undefined = undefined;
  console.log('cat ',cat);
  console.log('dog',dog);
  /* added code stops here */

	
  type Task = {
    title: string;
    description: string;
    completed: boolean;
  };

  const tasks: Task[] = [];

  const task1: Task = {
    title: "Conquer TypeScript",
    description: "Master the art of TypeScript sorcery",
    completed: false,
  };

  const task2: Task = {
    title: "Vanquish Bugs",
    description: "Embark on a bug-slaying adventure",
    completed: true,
  };

  const task3: Task = {
    title: "Build React Realms",
    description: "Construct kingdoms with the power of React",
    completed: false,
  };

  tasks.push(task1);
  tasks.push(task2);
  tasks.push(task3);

  console.log("Tasks ", tasks);
  
  return (
    <div>
      <TodoList />
      <p>Full Name: {fullName}</p>
      <p>Year: {year}</p>
      <p>Is this Bootcamp fun: {isThisBootCampFun ? 'Yes' : 'No'}</p>
      <p>name: {person1.name}</p>
      <p>age: {person1.age}</p>
      
      <p>Fruit 1: {fruits[0]}</p>
      <p>Fruit 2: {fruits[1]}</p>
      <p>Fruit 3: {fruits[2]}</p>      

      {/* added code starts */}
      <button onClick={() => printToConsole('Hello, TypeScript!')}>Click me</button>
      <p>name: {shapeShifter.name}</p>
      <p>age: {shapeShifter.age}</p>
      <p>cat: {cat}</p>
      <p>dog: {dog}</p>
      {/* added code stops */}
    </div>
  );
}

export default App;