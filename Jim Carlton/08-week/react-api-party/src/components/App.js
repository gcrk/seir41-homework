import YourLocation from './YourLocation.js';
import RandomQuote from './RandomQuote.js';
import RandomColor from './RandomColor.js';

import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">

      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <meta http-equiv='cache-control' content='no-cache' />
        <meta http-equiv='expires' content='0' />
        <meta http-equiv='pragma' content='no-cache' />
      </Helmet>

      <nav><h1>React App Party</h1></nav>
      <YourLocation />
      <RandomQuote />
      <RandomColor />

    </div>
  );
}

export default App;
