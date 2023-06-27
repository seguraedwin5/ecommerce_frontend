import Image from "next/image";
import { Carousel } from "react-bootstrap";
function Caroussel() {
    return ( 
        <Carousel>
            <Carousel.Item>
                <Image src={'/carousel1.jpg'} width={600} height={500}></Image>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={'/carousel2.jpg'} width={600} height={500}></Image>
            </Carousel.Item>
        </Carousel>
     );
}

export default Caroussel;