import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from './router';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route />
      </Router>
    </div>
  );
}

export default App;
