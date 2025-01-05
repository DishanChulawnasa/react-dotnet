import blooddonation from "../assets/blooddonation.jpg";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function Home() {
  return (
    <Container className="my-5">
      <Card className="shadow-lg border-0 bg-#343a40 text-light rounded">
        <CardBody>
          <img
            src={blooddonation}
            alt="Blood Donation Campaign"
            className="img-fluid mb-4 d-block mx-auto"
          />
          <CardTitle tag="h2" className="text-center text-dark mb-4">
            Welcome to Blood Donation Campaign 2025
          </CardTitle>

          <CardText tag="h4" className="text-muted text-center mb-4">
            Use this manager to effectively organize your blood donation
            campaign by:
          </CardText>
          <ListGroup flush>
            <ListGroupItem className="bg-dark text-light d-flex align-items-center">
              <i className="bi bi-plus-circle-fill text-success me-3"></i>
              <span>Add a new Candidate</span>
            </ListGroupItem>
            <ListGroupItem className="bg-dark text-light d-flex align-items-center">
              <i className="bi bi-pencil-fill text-warning me-3"></i>
              <span>Update a Candidate</span>
            </ListGroupItem>
            <ListGroupItem className="bg-dark text-light d-flex align-items-center">
              <i className="bi bi-trash-fill text-danger me-3"></i>
              <span>Delete a Candidate</span>
            </ListGroupItem>
            <ListGroupItem className="bg-dark text-light d-flex align-items-center">
              <i className="bi bi-eye-fill text-info me-3"></i>
              <span>Show all Candidates</span>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Home;
