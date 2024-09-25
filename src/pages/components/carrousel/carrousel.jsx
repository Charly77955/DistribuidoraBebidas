import React, { useState, useEffect } from 'react';
import { db } from '../../components/firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import Carousel from 'react-bootstrap/Carousel';
import './carrouselStyle.css';

export default function Carrousel() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const productosRef = collection(db, "promociones");
    getDocs(productosRef).then((resp) => {
      setElements(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return (
    <div className='carousel'>
    <Carousel className='carousel-slide'>
      {elements.map((item, i) => (
        <Carousel.Item key={i} interval={1000}>
          <img src={item.imagen} alt={item.altText} />
          <Carousel.Caption>
            <h3>{item.nombre}</h3>
            <p>{item.precio}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
}