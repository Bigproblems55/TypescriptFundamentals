//App.tsx
import TodoList from "./components/TodoList"
import './App.css';

function App(){
// Variable Declarations with Types
  const fullName: string = "Coding Temple"
  const year: number = 2024
  const isThisBootCampFun: boolean = true;
  // Object Type Declaration
  type Person = {
    name: string;
    age: number;
  };
// Object Creation
  const person1: Person = {
    name: "Alex",
    age: 26,
  };
  // Array of Strings
  const fruits: string[] = ["Bananas", "Orange", "Grapes"];
  console.log("Fruits ", fruits); 
// Any Type Example
  /* added code starts here */
  const shapeShifter: any = {
    name: 24,
    age: 'Alex'
  }
//  Function with Void Return Type
  const printToConsole = (value: string): void => {
    console.log(value);
  }
// Null and Undefined Types
  const cat: null = null;
  const dog: undefined = undefined;
  console.log('cat ',cat);
  console.log('dog',dog);
  /* added code stops here */

	// Task Management System
  type Task = {
    title: string;
    description: string;
    completed: boolean;
  };
// Array to hold tasks
  const tasks: Task[] = [];
// Creating tasks
  const task1: Task = {
    title: "Conquer TypeScript",
    description: "Master the art of TypeScript sorcery",
    completed: false,
  };
// Creating more tasks
  const task2: Task = {
    title: "Vanquish Bugs",
    description: "Embark on a bug-slaying adventure",
    completed: true,
  };
// Creating another task
  const task3: Task = {
    title: "Build React Realms",
    description: "Construct kingdoms with the power of React",
    completed: false,
  };
// Adding tasks to the array
  tasks.push(task1);
  tasks.push(task2);
  tasks.push(task3);
// Logging tasks to the console
  console.log("Tasks ", tasks);
  // Rendering the App Component
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

      {/* Button to trigger console log */}
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