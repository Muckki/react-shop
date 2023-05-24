
import './App.css'

function HeadLine() {
  
 

  return (
    <>
      
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
              <div className="light-switch">
                bu
              </div>
              <div className="search input">
                <input type="search" id='search' />검색
              </div>
              <div className="shopping button">
                <img src="/assets/shopping-bag-ui-svgrepo-com.svg" alt="장바구니" />
                <div className="counting">0</div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      
       
      
       
       

     
    </>
  )
}

export default HeadLine
