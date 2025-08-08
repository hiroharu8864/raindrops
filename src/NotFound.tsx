import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">ページが見つかりません</h2>
        <p className="error-message">
          お探しのページは存在しないか、移動された可能性があります。
        </p>
        <a href="/" className="home-button">
          🏠 ホームに戻る
        </a>
      </div>
      <div className="rain-animation">
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
      </div>
    </div>
  )
}

export default NotFound