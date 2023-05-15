
import './App.css'

function App() {

  return (
    <>
      <div className='react-shop'>
       <header className='head-line'>
        <div className="home button"></div>
        <div className="fassion button"></div>
        <div className="accs button"></div>
        <div className="digital button"></div>
        <div className="light button"></div>
        <div className="search input"></div>
        <div className="shopping button"></div>
       </header>
       <div className="carousel">
        <div className="jean inner"></div>
        <div className="digit inner"></div>
        <div className="foods inner"></div>
       </div>
       <div className="fassion-line">
        <h2>패션</h2>
        <div className="fassions container">
          <div className="fassion-item1"></div>
          <div className="fassion-item2"></div>
          <div className="fassion-item3"></div>
          <div className="fassion-item4"></div>
        </div>
       </div>
       <div className="accs-line">
        <h2>액세서리</h2>
        <div className="accss container">
          <div className="accs-item1"></div>
          <div className="accs-item2"></div>
          <div className="accs-item3"></div>
          <div className="accs-item4"></div>
        </div>
       </div>
       <div className="digital-line">
        <h2>디지털</h2>
        <div className="digitals container">
          <div className="digital-item1"></div>
          <div className="digital-item2"></div>
          <div className="digital-item3"></div>
          <div className="digital-item4"></div>
        </div>
       </div>
       <footer className='bottom-line'>
        <div className="class-name">제로베이스</div>
        <div className="cards">
          <div className="card1">비자</div>
          <div className="card2">마스터</div>
          <div className="card3">아멕스</div>
          <div className="card4">니들은</div>
          <div className="card5">뭔지를</div>
          <div className="card6">모르겠는데</div>
        </div>
        <div className="snss">
          <div className="facebook">페북</div>
          <div className="instagram">인스타</div>
          <div className="github">깃허브</div>
        </div>
        <div className="copyrights">Copyright © 2023 Zero Base</div>
       </footer>
      </div>
     
    </>
  )
}

export default App
