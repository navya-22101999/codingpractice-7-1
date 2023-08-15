// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    cash: 2000,
  }

  accWithdraw = amount => {
    this.setState(prevState => ({
      cash: prevState.cash - amount,
    }))
  }

  render() {
    const {cash} = this.state
    const {denominationsList} = this.props
    console.log(denominationsList[0].id)
    return (
      <div className="cont-1">
        <div className="cont-2">
          <div className="a">
            <div className="S">
              <h1 className="s">S</h1>
            </div>
            <div className="head">
              <p>Sarah Williams</p>
            </div>
          </div>
          <div className="rupees">
            <p className="bal">Your Balance</p>
            <div className="cont-4">
              <p className="cash">{cash}</p>
              <p className="cash1">In Rupees</p>
            </div>
          </div>
          <p>Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                details={each}
                withdraw={this.accWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
