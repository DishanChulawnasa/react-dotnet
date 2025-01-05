import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

function Create() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    mobile: "",
    email: "",
    age: "",
    bloodGroup: "",
    address: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("A new user candidate is added");
    dispatch(createUser(user));
    navigate("/home");
  };

  return (
    <Container className="my-5">
      <Card className="shadow border-0 rounded">
        <CardBody>
          <CardTitle tag="h3" className="text-center mb-4">
            Create Blood Donation Candidate
          </CardTitle>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="fullName">Full Name</Label>
                  <Input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Enter full name"
                    value={user.fullName}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="mobile">Mobile</Label>
                  <Input
                    type="text"
                    name="mobile"
                    id="mobile"
                    placeholder="Enter mobile number"
                    value={user.mobile}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="age">Age</Label>
                  <Input
                    type="number"
                    name="age"
                    id="age"
                    placeholder="Enter age"
                    value={user.age}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="bloodGroup">Blood Group</Label>
                  <Input
                    type="text"
                    name="bloodGroup"
                    id="bloodGroup"
                    placeholder="Enter blood group"
                    value={user.bloodGroup}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter address"
                    value={user.address}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <div className="text-center mt-4">
              <Button color="primary" type="submit">
                Create User
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Create;
