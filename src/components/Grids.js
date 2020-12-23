import React, { Component } from 'react'
import Grid from './Grid'
import { Consumer } from '../Context'
class Grids extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <React.Fragment>
              <table class='table table-hover table-dark'>
                <thead>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Phone</th>
                  </tr>
                </thead>
                {value.grids.map((grid) => (
                  <Grid key={grid.id} grid={grid} />
                ))}
              </table>
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}
export default Grids
