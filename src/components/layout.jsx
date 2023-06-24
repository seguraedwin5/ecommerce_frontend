import { Navbar, Container, Nav } from 'react-bootstrap'
import Link from 'next/link'

const Layout = ({ children }) => {
    return (
        <>

            <Navbar expand='lg' className='bg-body-tertiary' bg='dark' data-bs-theme='dark'>
                <Container>
                    <Navbar.Brand>E-comercce</Navbar.Brand>
                    <Nav className='me-auto'>

                        <Nav.Link as={Link} href="/home">Home</Nav.Link>
                        <Nav.Link as={Link} href="/productos">Productos</Nav.Link>
                        <Nav.Link as={Link} href="/categorias">Categorias</Nav.Link>
                        <Nav.Link as={Link} href="/proveedores">Proveedores</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} href="/auth/register">Registro</Nav.Link>
                        <Nav.Link as={Link} href="/auth/login">Log In</Nav.Link>
                    </Nav>

                </Container>
            </Navbar>

            <main>
                <Container className='d-flex justify-content-center mt-3 shadow'>
                    {children}
                </Container>
            </main>
        </>
    );
};

export default Layout;