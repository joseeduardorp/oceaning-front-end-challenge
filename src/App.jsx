import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Skills } from './pages/Skills';
import { Success } from './pages/Success';
import { List } from './pages/List';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/skills" component={Skills} />
      <Route path="/success" component={Success} />
      <Route path="/list" component={List} />
    </BrowserRouter>
  );
}

export default App;
