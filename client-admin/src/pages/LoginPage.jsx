import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginMiddleware } from "../stores/action/actionCreator";


function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // const loginHandler = (e) => {
  //   const { name, value } = e.target;
  //   setLoginData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const loginHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginMiddleware(loginData));
    navigate("/");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("access_token", JSON.stringify(loginData));

  //   navigate("/");
  // };

  return (
    <>
    <div className="container p-3">
      <div className="container">
        <Card className="p-3">
          <h1 className="text-center">Login Page</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                // value={loginData.email}
                onChange={loginHandler}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                // value={loginData.password}
                onChange={loginHandler}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </div>
    </>
  );
}

export default LoginPage;