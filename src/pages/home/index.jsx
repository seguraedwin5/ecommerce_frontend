import Caroussel from '@/components/Caroussel';
import {Container} from 'react-bootstrap'
function Home() {
    return ( 
        <Container className='d-flex justify-content-center mt-3'>
            <Caroussel></Caroussel>
        </Container>
        
     );
}

export default Home;