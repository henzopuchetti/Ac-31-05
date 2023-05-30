import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBarProjeto() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Contato">Contato</Nav.Link>
            <Nav.Link href="/Sobre">Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarProjeto;