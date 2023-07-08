import { Navbar, Container, Nav } from 'react-bootstrap'
import Link from 'next/link'

const injectGA = () =>{
    if (typeof window == 'undefined'){
        return;
    }
    window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-LBFHV2JSBM');
};
const Layout = ({ children }) => {
    
    return (
        <>
           
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LBFHV2JSBM"></script>
        <script>{injectGA()}</script>

            <Navbar expand='lg' className='bg-body-tertiary' bg='dark' data-bs-theme='dark'>
                <Container>
                    <Navbar.Brand as={Link} href='/'>E-comercce</Navbar.Brand>
                    <Navbar.Toggle aria-controls='elementos-navbar' /> {/* este elemento muestra el boton de hamburguesa y el collapse lleva el id y los elementos dentro */}
                    <Navbar.Collapse id='elementos-navbar'>
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
                    </Navbar.Collapse>
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