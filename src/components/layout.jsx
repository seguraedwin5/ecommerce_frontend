import {Navbar, Container, Nav} from 'react-bootstrap'
import Link from 'next/link'

const Layout = ({children}) => {
    return (
        <>
            <Navbar expand='lg' className='bg-body-tertiary'>
                <Container>
                    <Navbar.Brand>E-comercce</Navbar.Brand>
                    <Nav className='me-auto'>
                        
                        <Nav.Link as={Link} href="/home">Home</Nav.Link>
                        <Nav.Link >Productos</Nav.Link>
                        <Nav.Link>Categorias</Nav.Link>
                        <Nav.Link as={Link} href="/proveedores">Proveedores</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                    <Nav.Link>Registro</Nav.Link>
                    <Nav.Link>Log In</Nav.Link>
                    </Nav>
                </Container>
                
            </Navbar>
            <main>{children}</main>
        </>
    );
};

export default Layout;