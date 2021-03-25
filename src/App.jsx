import React, { useState} from "react";
import "./App.scss";
import GameComponent from "./GameComponent";
import Rules from './Rules';

function App() {
  const [ toggleScreen, setScreen ] = useState(false);
  return (
    <main>
    { toggleScreen ? <Rules/> : <GameComponent />}
      <button onClick={() => setScreen(!toggleScreen)} className='toggleScreen'>{toggleScreen ? 'play' : 'rules'}</button>
    </main>
  );
}

export default App;
