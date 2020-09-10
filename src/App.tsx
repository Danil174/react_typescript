import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import TodosPage from './components/TodosPage';
import AboutPage from './components/AboutPage';

const App: React.FC = () => {
  

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact/>
          <Route component={AboutPage} path="/about" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
