import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Helmet } from 'react-helmet-async';

function Login() {
  return (

    <div>
      <Helmet>
      <title>Login</title>
      <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      
      <div className="container login-container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-xl-4 form-container">
            <Form className="form-blog">
              <Container>
                <Row>
                  <Col col-sm-12 flex>
                    <Image src="../images/Tafra-new-logo@2x login.png" rounded />
                    <h3 className="email-text">Welcome Back,</h3>
                  </Col>
                </Row>
              </Container>
              <Form.Group
                className="mb-3   text-align-left form-mid-container"
                controlId="formBasicEmail"
              >
                <Form.Label className="email-text">Email </Form.Label>
                <Form.Control
                  type="email"
                  className="table-blog"
                  placeholder="Enter Your Email Address"
                />
              </Form.Group>
      
              <Form.Group
                className="mb-3 form-mid-container"
                controlId="formBasicPassword"
              >
                <Form.Label className="email-text"> Password</Form.Label>
                <Form.Control
                  type="password"
                  className="table-blog"
                  placeholder="Enter your Password"
                />
              </Form.Group>
      
      
              <Form.Group
                className="mb-3 form-mid-container"
                controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
      
      
              <Button className="button-blog" variant="primary" type="submit">
                Sign In
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
