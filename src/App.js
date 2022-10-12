import React from 'react';
import './App.css';

import { Footer, Header, Investments, Jobs, Program, Stories, Team } from './containers';

const App = () => {
  return (
    <div>
      <Header />
      <Program />
      <Investments />
      <Team />
      <Jobs />
      <Stories />
      <Footer />
    </div>
  )
}

export default App
