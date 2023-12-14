// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <h1>Calculate the Letters you enter</h1>
          <form>
            <label htmlFor="inputLabel">Enter the phrase</label>
            <br />
            <input
              type="text"
              id="inputLabel"
              placeholder="Enter the phrase"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </form>
          <p className="para">No.of letters: {searchInput.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}
export default LettersCalculator
