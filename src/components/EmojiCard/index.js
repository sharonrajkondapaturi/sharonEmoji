import './index.css'

const EmojiCard = props => {
  const {emoji, clickEmoji} = props
  const {emojiUrl, id, emojiName} = emoji

  const clicked = () => {
    clickEmoji(id)
  }
  return (
    <li className="list" onClick={clicked}>
      <button type="button" className="button">
        <img src={emojiUrl} alt={emojiName} className="img" />
      </button>
    </li>
  )
}
export default EmojiCard
