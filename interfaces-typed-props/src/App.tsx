
      // App.tsx\
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Person, ProfileProps } from './models/Person.model';
import  Personcomponents from './components/Personcomponents';
import Card from 'react-bootstrap/Card';  
import Status from './components/Status';
import Button from './components/Button';
import NestedComponent from './components/NestedComponent';
function App() {
  const student: Person = {
    name: 'John',
    age: 25,
    email:'example@email.com'
  }
  const profileProps: ProfileProps ={
    person: student,
    message: 'Hello, welcome to profile'
  }
  const handleClick = () =>{
    console.log("Button clicked")
  }
console.log(profileProps);
  return (
    <div> 
       <Card>
        <Card.Body>
          <Card.Title>Person Profile</Card.Title>
          <Personcomponents {...profileProps} />
        </Card.Body>
       </Card>
       
       <Header >Hey there buddy!</Header>
      <NestedComponent>
        <h3>This is children component</h3>
        <Status status="success"/>  
      </NestedComponent>
      <Button props={{ handleClick }} >Click Me</Button>  
    </div>
  );
}

export default App;
 