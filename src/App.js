import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import UsPublishers from './components/UsPublishers';
import Article from './components/Article'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search' component={Search} />
            <Route path='/us-publishers' component={UsPublishers} />
            <Route path='/:article_id' component={Article} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
