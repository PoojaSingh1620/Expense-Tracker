import React, { useState, useEffect} from "react";
import { Form, Input, message } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async(values) =>{
  try{
    setLoading(true)
     const {data}=await axios.post('/user/login', values)
     setLoading(false)
     message.success('login success')
     localStorage.setItem('user', JSON.stringify({...data.user, password:''}))
     navigate('/')
  }catch(error){
    setLoading(false)
   message.error('Something went wrong')
  }
  };
  //prevent for login
  useEffect(() =>{
    if(localStorage.getItem("user")){
      Navigate("/");
    }

  }, [Navigate]);
  return (
    <>
      <div className="resgister-page ">
       {loading && <Spinner/> }
        <Form layout="vertical"  onFinish= {submitHandler}>
          <h1>Login Form</h1>

          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/register">Not a user ? Cleck Here to regsiter</Link>
            <button className="btn btn-primary">Login</button>
          </div>
        </Form>
      </div>
    </>
  );
}; 

export default Login;