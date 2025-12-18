
      // App.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Person, ProfileProps } from './models/Person.model';
import  Personcomponents from './components/Personcomponents';
import Card from 'react-bootstrap/Card';  
import Status from './components/Status'
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
  
console.log(profileProps);
  return (
    <div> 
       <Card>
        <Card.Body>
          <Card.Title>Person Profile</Card.Title>
          <Personcomponents {...profileProps} />
          
        </Card.Body>
       </Card>
       <Status />
      {student.name}
    </div>
  );
}

export default App;
 