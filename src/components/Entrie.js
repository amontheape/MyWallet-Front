import { EntrieTile } from '../style/style';

function Entrie({date, description, value}) {
  return (
    <EntrieTile value={value}>
      <span>{date}</span>
      <div className='inner'>
        <p>{description}</p>
        <span>{parseFloat(value).toFixed(2)}</span>
      </div>
    </EntrieTile>
  )
}

export default Entrie;