import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext()
const reducer = (state, action) => {}
export class Provider extends Component {
  state = {
    grids: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action))
    },
  }
  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({ grids: res.data })
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer
