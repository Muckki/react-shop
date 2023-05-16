
import './App.css'

function App() {
  
  const handleClick = (e:any) => {
    e.preventDefault();
  }
 

  return (
    <>
      <div className='react-shop'>
       <header className='head-line'>
        <nav className='navigation-bar'>
          <div className="nav-container">
            <a href='/' className="home" onClick={handleClick}>React Shop</a>
            <div className="navi-flex">
              <div className="fassion button">패션</div>
              <div className="accs button">액세서리</div>
              <div className="digital button">디지털</div>
            </div>
            <div className="nav-flex">
              <div className="light-switch">해</div>
              <div className="search input">검색</div>
              <div className="shopping button">장바구니
                <div className="counting">0</div>
              </div>
            </div>
          </div>
        </nav>
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
