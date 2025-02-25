import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import Menubar from "../components/Menubar";
import Footer from "../components/Footer";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <>
      <Menubar />
      <Container className="mt-5 d-flex justify-content-center">
        <Card style={{ width: "25rem" }} className="p-4 shadow">
          <h3 className="text-center">Signup</h3>
          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Signup
            </Button>
          </Form>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Signup;
