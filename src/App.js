import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormWrapper from './components/FormWrapper';
import People from './components/People';


function App() {
  return (
    <div className="App">
      <FormWrapper />      
      <Router>
        <People path="/:id"/>
      </Router>
      
    </div>
  );
}

export default App;
