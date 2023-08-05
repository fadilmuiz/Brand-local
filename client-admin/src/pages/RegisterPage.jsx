import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Navbar from "../componen/Navbar"
import { useDispatch, useSelector } from "react-redux";
import { registerMiddleware } from "../stores/action/actionCreator";



function RegisterPage() {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  let [adminData, setAdminData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const formHandler = (e) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerMiddleware(adminData));
    navigate("/");
  };

  return (
    <>
    <div className='container p-3'>
      <div className='container'>
        <Card className='p-3'>
          <h1 className='text-center'>New Admin</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group className='mb-3'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter username'
                // value={username}
                name="username"
                onChange={(formHandler)}
                // onChange={(event) => setUsername(event.target.value)}
              />
              <Form.Text className='text-muted'></Form.Text>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                // value={email}
                name="email"
                onChange={(formHandler)}
              />
              <Form.Text className='text-muted'></Form.Text>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                // value={password}
                name='password'
                onChange={(formHandler)}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </div>
    </>
  );
}

export default RegisterPage;