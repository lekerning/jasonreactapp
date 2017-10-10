import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShoppingList from './ShoppingList.js'

import MyRouter from './routerTest.js'

import MainPage from './mainpage/mainpage.js'
class Square extends React.Component {  
  render() {
    return (
      <button className="square" onClick={() => this.props.buttonPressed()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    // 'buttonPressed', 'value' is jsut a customized attribute, 
    return <Square value={this.props.squares[i]} buttonPressed={()=> this.props.buttonClick(i)}/>;
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(){
    super()
    this.state = {
      history: [
        {squares: Array(9).fill(null)}
      ],
      stepNumber: 0,
      isXNext: true
    }
  }

  buttonClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1]
    const winner = caculateWinner(current.squares)

    const newSquare = current.squares.slice()
    // 1. 不能重复点击， 2. 如果有赢家，游戏结束
    if (winner || newSquare[i]) {
      return
    }
    newSquare[i] = this.state.isXNext ? 'X' : 'O'
    // 这里我们可以保存这个数组，
    this.setState({
      history: history.concat([{
        squares: newSquare
      }]),
      stepNumber: history.length,
      isXNext: !this.state.isXNext
    })
  }

  jumpTo(move) {
      this.setState({
      stepNumber: move,
      xIsNext: (move % 2) === 0,
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = caculateWinner(current.squares)

    const moves = history.map((step, move) => {
      const desc = move ? 'Move #' + move : 'Game start'
      return <li key={move}><a href="#" onClick={() => this.jumpTo(move)}>{desc}</a></li>
    })

    let status
    if (winner) {
      status = 'Winner is: ' + winner
    } else {
      status = 'Next player: ' + (this.state.isXNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} buttonClick={(i) => this.buttonClick(i)}/>
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

// ========================================
ReactDOM.render(
  <MyRouter />,
  document.getElementById('root')
);

function caculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] == squares[c]) {
      return squares[a]
    }
  }
  return null
}

