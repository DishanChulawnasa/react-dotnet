import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, deleteUser } from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import { Container, Table, Button, Row, Col } from "reactstrap";

function Home() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this candidate?"
    );
    if (confirmDelete) {
      dispatch(deleteUser(id));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container className="my-5">
      <h3 className="text-center mb-4">Blood Donation Candidates</h3>
      <Row className="mb-4">
        <Col className="d-flex justify-content-end">
          <Link to="/create">
            <Button color="primary">Create New User</Button>
          </Link>
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Age</th>
            <th>Blood Group</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.fullName}</td>
              <td>{user.mobile}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.address}</td>
              <td>
                <Link to={`/update/${user.id}`}>
                  <Button color="warning" size="sm" className="button-spacing">
                    Edit
                  </Button>
                </Link>
                <Button
                  color="danger"
                  size="sm"
                  onClick={() => handleDelete(user.id)}
                  className="button-spacing"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Home;
