import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, resetGame} = props
  const win = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const status = isWon ? 'You Won' : 'You Lose'
  const changeScoreCard = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-background">
      <div className="background2">
        <div>
          <h1 className="you">{status}</h1>
          <p className="scor">{changeScoreCard}</p>
          <p className="result">{score}/12</p>
          <button type="button" onClick={resetGame} className="button1">
            Play Again
          </button>
        </div>
        <div>
          <img src={win} alt="win or lose" className="win-or-lose-img" />
        </div>
      </div>
    </div>
  )
}
export default WinOrLoseCard
