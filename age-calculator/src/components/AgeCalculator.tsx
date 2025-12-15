import React, {useState} from 'react';

const AgeCalculator: React.FC = () => {
  const [birthYear, setBirthYear] = useState<number | ''>('');
  const [age, setAge] = useState<number | null>(null);

  const calculateAge = (): void => {
    if (birthYear) {
      const currentYear: number = new Date().getFullYear();
      setAge(currentYear - birthYear);
    }
    }
    return (    
    <div className="age-calculator">    
        <h2>Age Calculator</h2> 
        <input
          type="number"
          placeholder="Enter your birth year"
          value={birthYear}
          onChange={(e) => setBirthYear(parseInt(e.target.value) || '')}
        />    
        <button onClick={calculateAge}>Calculate Age</button>    
        {age !== null && (    
          <p>Your age is: {age} years</p>    
        )}    
      </div>    
    );    
  };    

export default AgeCalculator;