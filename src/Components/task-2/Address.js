import React, { Component } from 'react'

export default class Address
 extends Component {
  render() {
    return (
      <>
         <p>
        <b>Address:</b> {this.props.title}
      </p>
      </>
    )
  }
}
