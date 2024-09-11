import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {topScore: 0, clickedEmojiList: [], isGameProgress: true}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  displayScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({
      topScore: newTopScore,
      isGameProgress: false,
    })
  }

  resetGame = () => {
    this.setState({isGameProgress: true, clickedEmojiList: []})
  }

  scoreCard = () => {
    const {clickedEmojiList} = this.state
    const {emojisList} = this.props
    const isWon = clickedEmojiList.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojiList.length}
        resetGame={this.resetGame}
      />
    )
  }

  clickEmoji = id => {
    const {clickedEmojiList} = this.state
    const {emojisList} = this.props
    const clickedEmoji = clickedEmojiList.includes(id)
    const clickedEmojiListLength = clickedEmojiList.length
    if (clickedEmoji) {
      this.displayScore(clickedEmojiListLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiListLength) {
        this.displayScore(clickedEmojiListLength)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  renderList = () => {
    const shuffledList = this.shuffledEmojisList()

    return (
      <ul className="emoji">
        {shuffledList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emoji={eachEmoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, clickedEmojiList, isGameProgress} = this.state
    return (
      <div className="background">
        <NavBar
          topScore={topScore}
          score={clickedEmojiList.length}
          isGameProgress={isGameProgress}
        />
        <div>{isGameProgress ? this.renderList() : this.scoreCard()}</div>
      </div>
    )
  }
}

export default EmojiGame
