import React from 'react'
import { useNavigate } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  return (
    <div>
      <div className='main-logo' onClick={() => navigate('/')}>
        <img src='img/logo.png'/>
      </div>
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
      </div>
      <button className='toggleBtn'>
        <span class="hamburger_icon">
          <FontAwesomeIcon icon={faBars} />
        </span>
      </button>
    </div>
  )
}

export default Navbar
