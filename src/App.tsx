import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [maxNumber, setMaxNumber] = useState(10);
  const [magicNumber, setMagicNumber] = useState(Math.floor(Math.random() * 11));
  const [guess, setGuess] = useState<Number|''>('');
  const [displayMagicNumber, setDisplayMagicNumber] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>('');

  function handleSubmit(event: React.FormEvent){
    event.preventDefault();
  }

  function handleDisplayMagicNumber(){
      setDisplayMagicNumber(displayMagicNumber ? false:true);
      setMsg('');
      winner();
  }

  function winner(){
    if (guess == magicNumber){
      setMsg("You win!");
    } else {
      setMsg("Try again");
    }
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
        <input  type='number' onChange={(e) => { setGuess(Number(e.target.value))} } />
        <button type='submit'>Submit my guess</button>
      </form>
    </>
  )
}

export default App
