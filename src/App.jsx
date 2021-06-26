import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Skills } from './pages/Skills';
import { Success } from './pages/Success';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/skills" component={Skills} />
      <Route path="/success" component={Success} />
    </BrowserRouter>
  );
}

export default App;
