import React from 'react';
import { AllCandies } from './AllCandies';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';

const Root = props => {
  return (
    <Router>
      <div>
        <nav>Goodie Bag</nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <Navbar />
          <p>What a nice home page for your goodies!</p>
          <Route path="/candies" component={AllCandies} />
        </main>
      </div>
    </Router>
  );
};

export default Root;
