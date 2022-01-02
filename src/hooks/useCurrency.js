import React, { Component } from 'react'
import arrowImg from '../images/arrow.png';

export default class useCurrency extends Component {

  render() {
    // const selectedField = document.getElementById("selectedField")
    const options = document.getElementsByClassName("option")
    const optionContainer = document.getElementById("options-container")

    const selectedField = () => {
      optionContainer.classList.toggle("hide")
      console.log(optionContainer);
    }

    return (
      <div>
        <div className="dropdown-container">
          <div onClick={selectedField} id="selectedField">
            <p id="selected-text">$</p> <img className="header-arrow-img" src={arrowImg} alt="" />
          </div>
          <div id="options-container" className="hide">
            <div className="option"><p className="symbol">$</p> <p className="currency">USD</p></div>
            <div className="option"><p className="symbol">$A</p> <p className="currency">AUD</p></div>
            <div className="option"><p className="symbol">#</p> <p className="currency">JPY</p></div>
          </div>
        </div>
      </div>
    )
  }
}
