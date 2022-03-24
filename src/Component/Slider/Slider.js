import React from 'react';
import { Carousel } from 'react-bootstrap';
import images1 from '../../images/61pdShJHBbL._AC_SX679_.jpg';
import images2 from '../../images/61QckPGdteL._AC_SX679_.jpg';
import images3 from '../../images/61W1iNjiYSL._AC_SX679_.jpg';


const Slider = () => {
    return (
      <div style={{margin:'0 130px'}}>
        <Carousel fade>
          <Carousel.Item>
            <img
              style={{ height: "300px" }}
              className="d-block w-100"
              src={images1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "300px" }}
              className="d-block w-100"
              src={images2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "300px" }}
              className="d-block w-100"
              src={images3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Slider;