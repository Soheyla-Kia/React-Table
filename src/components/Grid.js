import React, { Component } from 'react'
import { Consumer } from '../Context'
class Grid extends Component {
  render() {
    const { id, name, email, phone } = this.props.grid

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value

          return (
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
              </tr>
            </tbody>
          )
        }}
      </Consumer>
    )
  }
}

export default Grid
