import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const arr = ['11','12','13','14','15','16', '21', '22','23','24','25', '31','32','33','34','35','36', '41', '42','43','44','45','51','52','53','54','55','56']

class App extends Component {

  state = {
    pieceN: []
  }

  handlePieces = () => {

    const rand = arr[Math.floor(Math.random()*arr.length)]

    if (this.state.pieceN.indexOf(rand) === -1) {
      this.setState({
        pieceN: [...this.state.pieceN, rand]
      }, console.log(this.state.pieceN))
    }else {
      this.handlePieces()
    }
    
  }

  renderSixPieces = (index, classN) => {
    return (
      <div id={index} className={`frame ${classN && classN}`}>
        <div className={`piece piece1 ${Array.isArray(this.state.pieceN) && (( this.state.pieceN.indexOf(`${index}1`) !== -1) && 'hide')}` }></div>
        <div className={`piece piece2 ${Array.isArray(this.state.pieceN) && (( this.state.pieceN.indexOf(`${index}2`) !== -1) && 'hide')}`}></div>
        <div className={`piece piece3 ${Array.isArray(this.state.pieceN) && (( this.state.pieceN.indexOf(`${index}3`) !== -1) && 'hide')}`}></div>
        <div className={`piece piece4 ${Array.isArray(this.state.pieceN) && (( this.state.pieceN.indexOf(`${index}4`) !== -1) && 'hide')}`}></div>
        <div className={`piece piece6 ${Array.isArray(this.state.pieceN) && (( this.state.pieceN.indexOf(`${index}5`) !== -1) && 'hide')}`}></div>
        <div className={`piece piece7 ${Array.isArray(this.state.pieceN) && (( this.state.pieceN.indexOf(`${index}6`) !== -1) && 'hide')}`}></div>
      </div>
    )
  }

  renderFivePieces = (index, classN) => {
    return (
      <div id={index} className={`frame ${classN && classN}`}>
      <div className={`piece piece1 ${Array.isArray(this.state.pieceN) && (( this.state.pieceN.indexOf(`${index}1`) !== -1) && 'hide')}` }></div>
      <div className={`piece piece2 ${Array.isArray(this.state.pieceN) && (( this.state.pieceN.indexOf(`${index}2`) !== -1) && 'hide')}`}></div>
      <div className={`piece piece3 ${Array.isArray(this.state.pieceN) && (( this.state.pieceN.indexOf(`${index}3`) !== -1) && 'hide')}`}></div>
      <div className={`piece piece4 ${Array.isArray(this.state.pieceN) && (( this.state.pieceN.indexOf(`${index}4`) !== -1) && 'hide')}`}></div>
      <div className={`piece piece5 ${Array.isArray(this.state.pieceN) && (( this.state.pieceN.indexOf(`${index}5`) !== -1) && 'hide')}`}></div>
    </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/* <div className="stage2Columns">
          {this.renderSixPieces(1)}
          {this.renderFivePieces(2)}
          {this.renderSixPieces(3)}
          {this.renderFivePieces(4)}
        </div>

        <div className="stage3Columns">
          {this.renderSixPieces(1)}
          {this.renderFivePieces(2)}
          {this.renderSixPieces(3)}
          {this.renderFivePieces(4 ,'third')}
          {this.renderSixPieces(5,'third')}
        </div> */}

         {/* <div className="stage3Columns">
          {this.renderSixPieces(1)}
          {this.renderFivePieces(2)}
          {this.renderSixPieces(3)}
          {this.renderFivePieces(4)}
          {this.renderSixPieces(5)}
          {this.renderFivePieces(6)}
        </div> */}

         {/* <div className="stage4Columns">
          {this.renderSixPieces(1)}
          {this.renderFivePieces(2)}
          {this.renderSixPieces(3)}
          {this.renderFivePieces(4)}
          {this.renderSixPieces(5, 'quarter')}
          {this.renderFivePieces(6, 'quarter')}
          {this.renderSixPieces(7, 'quarter')}
        </div> */}

        {/* <div className="stage4Columns">
          {this.renderSixPieces(1)}
          {this.renderFivePieces(2)}
          {this.renderSixPieces(3)}
          {this.renderFivePieces(4)}
          {this.renderSixPieces(5)}
          {this.renderFivePieces(6)}
          {this.renderSixPieces(7)}
          {this.renderFivePieces(8)}
        </div> */}

        {/* <div className="stage3Columns">
          {this.renderSixPieces(1)}
          {this.renderFivePieces(2)}
          {this.renderSixPieces(3)}
          {this.renderFivePieces(4)}
          {this.renderSixPieces(5)}
          {this.renderFivePieces(6)}
          {this.renderSixPieces(7)}
          {this.renderFivePieces(8)}
          {this.renderSixPieces(9)}
        </div> */}

         <div className="stage5Columns">
          {this.renderSixPieces(1)}
          {this.renderFivePieces(2)}
          {this.renderSixPieces(3)}
          {this.renderFivePieces(4)}
          {this.renderSixPieces(5)}
          {this.renderFivePieces(6)}
          {this.renderSixPieces(7)}
          {this.renderFivePieces(8)}
          {this.renderSixPieces(9)}
          {this.renderFivePieces(10)}
        </div>

        <button onClick={this.handlePieces}>click</button>
       
      </div>
    );
  }
}

export default App;
