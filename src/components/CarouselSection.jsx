// CarouselSection.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExampleCarouselImage = ({ imgSrc, text }) => (
  <img
    className="d-block w-100"
    src={imgSrc}
    alt={text}
    style={{ height: '500px', objectFit: 'cover' }}
  />
);

const CarouselSection = () => (
  
     
      <Carousel slide={false} style={{ width: '100%', margin: 'auto' }}>
        <Carousel.Item>
          <ExampleCarouselImage imgSrc="/image 6.png" text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage imgSrc="/image 7.png" text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage imgSrc="/image 8.png" text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
);

export default CarouselSection;
