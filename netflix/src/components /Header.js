import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <>
      <Navbar id="navBar">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/trending">Home</Nav.Link>
            <Nav.Link href="/getMovies">Fav Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
