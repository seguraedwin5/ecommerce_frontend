import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Container,Row, Col, T} from 'react-bootstrap'
import Video from '@/components/Video'
import ReactPlayer from 'react-player'


export default function Index() {
  return (
   <Container>
        
   
       <Row>
        <Col>
          <Video></Video>
        </Col>
        <Col className='d-flex justify-content-center align-items-center'>
          <div><h1 className='text-center'>Bienvenido a mi Ecommerce</h1></div>
        
        </Col>
       </Row>
        
       
        
        
          
        
        
   </Container>
  )
}
