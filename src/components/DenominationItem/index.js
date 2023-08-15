// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, withdraw} = props
  const {value} = details
  const onSubtract = () => {
    withdraw(value)
  }
  return (
    <li>
      <button type="button" onClick={onSubtract}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
