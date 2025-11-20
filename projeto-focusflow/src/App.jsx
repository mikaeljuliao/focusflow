import { useState, useEffect } from 'react'

import Home from './pages/Home';
import Motivação from './componentes/Motivação';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-full bg-zinc-100 text-zinc-800">
     
     <div>
      <Home />
      <Motivação />
     </div>
    </div>
  );
}

export default App

 