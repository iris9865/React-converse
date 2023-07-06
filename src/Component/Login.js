import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components';

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  background-color: #fffffd;
`;
const FormDetail = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  justify-content: flex-end;
`;
const Label = styled.label`
  margin-right: 10px;
`;
const Input = styled.input`
  width: 300px;
  margin-bottom: 10px;
  padding-left: 20px;
`;
const SubmitInput = styled.input`
  background-color: purple;
  border: none;
  border-radius: 10px;
  color: white;
  width: 15vw;
  height: 5vh;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 70px;
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
    <div>
      <Form>
        <FormDetail>
          <Label>이메일</Label>
          <Input type='text'></Input>
        </FormDetail>
        <FormDetail>
          <Label>비밀번호</Label>
          <Input type='password'></Input>
        </FormDetail>
        <SubmitInput type="submit" value="로그인" onClick={loginUser}/>
      </Form>
    </div>
  )
}

export default Login
