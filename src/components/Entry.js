import { EntryTile } from '../style/style';

function Entry({price, description, type, date}) {
  return (
    <EntryTile type={type}>
      <span>{date}</span>
      <div className='inner'>
        <p>{description}</p>
        <span>{parseFloat(price).toFixed(2)}</span>
      </div>
    </EntryTile>
  )
}

export default Entry;