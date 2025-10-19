import { useEffect, useState } from 'react'
import './App.css'

type UserGuess = {
  username: string;
  guess: number;
}

function App() {

  const [maxNumber, setMaxNumber] = useState(10);
  const [magicNumber, setMagicNumber] = useState<number>(0);
  const [displayMagicNumber, setDisplayMagicNumber] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>('');

  const [guess, setGuess] = useState<number>(0);
  const [username, setUsername] = useState<string>('');
  const [guesses, addGuess] = useState<UserGuess[]>([]);
  
  useEffect(() => {
    setMagicNumber(Math.floor(Math.random() * maxNumber+1));
  }, [maxNumber]);

  function generateNewNumber(){
    setMagicNumber(Math.floor(Math.random() * maxNumber+1));
  }

  function handleSubmit(event: React.FormEvent){
    event.preventDefault();
    addGuess([...guesses, { username, guess }]);
  }


  function handleDisplayMagicNumber(){
      setMaxNumber(10); 
      if(displayMagicNumber){
      generateNewNumber();
      }
      setDisplayMagicNumber(displayMagicNumber ? false:true);
      checkWinner();
  }


  function handleRemoveGuess(indexToRemove: number){
    const newGuesses = guesses.filter((_, index) => index !== indexToRemove);
    addGuess(newGuesses);
  }

  function checkWinner(){
    const neartestGuess = guesses.reduce((prev, curr) => {
      return (Math.abs(curr.guess - magicNumber) < Math.abs(prev.guess - magicNumber) ? curr : prev);
    }, guesses[0]);
    setMsg('Winner: '+ neartestGuess.username + ' with guess ' + neartestGuess.guess);
  }

  return (
    <>
      <div>
        <h2>{displayMagicNumber ? msg : ''}</h2>
        <h1>
          {displayMagicNumber ? magicNumber : '#?'}          
        </h1>
        <button onClick={handleDisplayMagicNumber}>{displayMagicNumber ? 'Hide':'Show'} magic number</button>
      </div>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <p>Enter a number between 0 and {maxNumber}</p>
        <input type='text' onChange={(e) => { setUsername(e.target.value)} } />
        <input  type='number' onChange={(e) => { setGuess(Number(e.target.value))} } />
        <button type='submit'>Add guess</button>
      </form>

      {
        guesses.map((g, index) => (
          <div key={index}>
            <p>{g.username} guessed {g.guess} <button onClick={() => handleRemoveGuess(index)}>Remove</button></p>
          </div>
        ))
      }

    </>
  )
}

export default App
