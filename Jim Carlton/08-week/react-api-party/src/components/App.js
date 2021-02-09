import YourLocation from './YourLocation.js';
import RandomQuote from './RandomQuote.js';
import RandomColor from './RandomColor.js';

import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <nav><h1>React App Party</h1></nav>
      <YourLocation />
      <RandomQuote />
      <RandomColor />

    </div>
  );
}

export default App;
