import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = [
    '신발',
    '의류',
    '아동',
    '이달의 인기',
    '런칭캘린더',
    'SALE'
  ];

  const navigate = useNavigate();
  // const goToLogin = () => {
  //   navigate('/login');
  // }

  const search = (event) => {
    if(event.key === "Enter") {
      let keyword = event.target.value;
      console.log('keyword', keyword);
      navigate(`/?q=${keyword}`);  
    }
  }

  return (
    <div>
      <div className='nav-header'>
      {authenticate ? (
        <div onClick={() => setAuthenticate(false)}> 
          {/* <FontAwesomeIcon icon={faUser} /> */}
          <span style={{cursor: 'pointer'}}>로그아웃</span>
        </div> 
      ) : (
        <div onClick={() => navigate('/login')}>
          {/* <FontAwesomeIcon icon={faUser} /> */}
          <span style={{cursor: 'pointer'}}>로그인</span>
        </div>
      )}
      </div>
      <div className='main-logo'>
        <img src='https://www.converse.co.kr/web/upload/seo_og_image.png'/>
      </div>
      <div className='nav-menu-area'>
        <ul className='menu'>
          {menuList.map((menu, index) => (
            <li>
              <a href='#' key={index}>
                {menu}
              </a>
            </li>
          ))}
        </ul>
        <div className='search-box'>
          <input type='text' placeholder='검색' onKeyPress={search}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
