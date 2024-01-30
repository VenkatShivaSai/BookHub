import {Component} from 'react'
import './index.css'

class Counter extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div>
          <button type="button" onClick={this.onIncrement}>
            +
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
