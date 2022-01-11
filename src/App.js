import React, { Component } from 'react';
import Navbar from './components/layout/navbar';
import User from './components/users/Users';
import axios from 'axios';
import './App.css';
import Search from './components/users/Search';
import Alert from './components/layout/alerts';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min';
import about from './components/about/about';
import UserInfo from './components/users/user';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }
  // async componentDidMount() {
  //   this.setState({loading: true})
  //   const res =  await axios.get('https://api.github.com/users');
  //   this.setState({users: res.data, loading: false})

  // }

  searchUsers = async (text) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    this.setState({ users: res.data.items, loading: false })
  }

  getUser = async (userName) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users/${userName}`);
    this.setState({ user: res.data })
  }

  getUserRepos = async (userName) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users/${userName}/repos`);
    this.setState({ repos: res.data })
  }

  clearUser = () => {
    this.setState({ users: [], loading: false })
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 5000)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div className='container'>
            <Alert alert={this.state.alert}></Alert>
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search searchUsers={this.searchUsers} clearUser={this.clearUser}
                    setAlert={this.setAlert}></Search>
                  <User loading={this.state.loading} users={this.state.users}></User>
                </Fragment>
              )} />

              <Route exact path='/about' component={about}></Route>
              <Route exact path='/user/:login' render={props => (
                <UserInfo {...props} getUser={this.getUser} user={this.state.user}
                  repos={this.state.repos} getUserRepos={this.getUserRepos}></UserInfo>
              )} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }

}

export default App;
