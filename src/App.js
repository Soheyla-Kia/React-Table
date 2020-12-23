import React, { Component } from 'react'
import './App.css'
import Grids from './components/Grids'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from './Context'

class App extends Component {
  render() {
    return (
      <Provider>
        <div className='App'>
          <div className='container'>
            <Grids />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
