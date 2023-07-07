import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components';

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 600px;
  box-shadow: 5px 5px 15px rgba( 0, 0, 0, 0.1);
  
`;
const FormDetail = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  width: 300px;
  margin-bottom: 10px;
  padding-left: 20px;
  border: 1px solid lightgray
  border-radius: 10px;
`;
const SubmitInput = styled.input`
  background-color: rgb(255, 255, 243);
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 200px;
  height: 60px;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  transition: 0.5s;

  &:hover {
    background-color: navy;
    color: white;
  }
`;

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    console.log('login user');
    setAuthenticate(true);
    navigate('/');
  };
  return (
    <div className='login'>
      <Form>
        <h2 style={{marginBottom: "40px"}}>Sign In</h2>
        <FormDetail>
          <Input type='email' placeholder='이메일을 입력하세요'></Input>
        </FormDetail>
        <FormDetail>
          <Input type='password' placeholder='비밀번호를 입력하세요'></Input>
        </FormDetail>
        <SubmitInput type="submit" value="로그인" onClick={loginUser}/>
      </Form>
      <div className='login-img'>
        <img src='/img/banner2.png'></img>
        <div className='login-img-text'>
          <h2>Find Your Own Style!</h2> 
          <h3>Love. Converse</h3>  
        </div>
      </div>
    </div>
  )
}

export default Login
