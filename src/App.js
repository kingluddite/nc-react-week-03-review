import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
// shared
import Footer from "./components/shared/Footer"
import Header from "./components/shared/Header"
import Navbar from "./components/shared/Navbar"
// pages
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"

// import local data
import { CAMPSITES } from "./data/campsites"

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      campsites: CAMPSITES,
    }
  }
  render() {
    return (
      <Router>
        <div className='container'>
          <Header />
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/contact' component={ContactPage} />
          </Switch>
          {/* <p>Reviewing Week 3 - React</p>
          {this.state.campsites.map((campsite) => (
            <div>{campsite.name}</div>
          ))} */}
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
