import './profile.css'
import React, { Component } from 'react'
import Name from '../Name'
import Email from '../Email'
import Address from '../Address'
import PersonalInfo from '../PersonalInfo'

export default class Profile extends Component {
  render() {
    return (
      <div className='user-div'>
        <Name title={this.props.name}/>
        <Email title={this.props.email}/>
        <Address title={this.props.address}/>
        <PersonalInfo title={this.props.info}/>

      </div>
    )
  }
}

