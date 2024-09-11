import './index.css'

const NavBar = props => {
  const {topScore, score, isGameProgress} = props
  return (
    <div className="navBar">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-img"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {isGameProgress && (
        <div className="score">
          <p className="para">Score: {score}</p>
          <p className="para">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
