import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home"><img src={'./images/afklogo1.png'} className="Logo-app" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#products" active>Productos</Nav.Link>
                            <Nav.Link href="#contact">Contacto</Nav.Link>
                        </Nav>
                        <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;