import Carousel from 'react-bootstrap/Carousel';

function Caroussel1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3735156/pexels-photo-3735156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3368291/pexels-photo-3368291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1  "
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Caroussel1;