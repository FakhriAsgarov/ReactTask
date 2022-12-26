import React, { Component } from 'react'

export default class PersonalInfo extends Component {
  render() {
    return (
      <>
     <p>
        <b>About:</b> {this.props.title}
      </p>
      </>
    )
  }
}
