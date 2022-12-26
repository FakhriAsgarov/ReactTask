
import './dice.css'
import React, { Component } from 'react'

export default class Dice extends Component {

  onKeypress=(event)=>{
    let dices=document.querySelectorAll('.dice');
    if(event.key===" "){
      document.querySelector('.active').classList.remove('active');
      dices[Math.floor(Math.random()*dices.length)].classList.add('active')

    }
  }
componentDidMount(){
  window.addEventListener('keypress', this.onKeypress)
}
  render() {
    return (
      <div className='dices'>
        <div className="dice active">
        <div className="round"></div>
        </div>
        <div className="dice">
        <div className="round"></div>
        <div className="round"></div>
        </div>
        <div className="dice">
        <div className="round"></div><div className="round"></div>
        <div className="round"></div>
        </div>
        <div className="dice ">
        <div className="round"></div><div className="round"></div>
        <div className="round"></div><div className="round"></div>
        </div>
        <div className="dice">
        <div className="round"></div><div className="round"></div>
        <div className="round"></div><div className="round"></div>
        <div className="round"></div>
        </div>
        <div className="dice">
        <div className="round"></div><div className="round"></div>
        <div className="round"></div><div className="round"></div>
        <div className="round"></div><div className="round"></div>
        </div>

      </div>
    )
  }
}
